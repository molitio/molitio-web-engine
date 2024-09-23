/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import * as Yup from 'yup';
import { SystemContext } from '@molitio/ui-core';
import { StyledForm } from './style';
import { ContactButton } from './style';
import { StyledField } from './style';
import { handleRecaptcha } from '../utils';
import { Formik } from 'formik';

interface FormProps {
    position?: string;
}

type FormValues = {
    from_name: string;
    from_email: string;
    message: string;
};

const ContactForm: React.FC<FormProps> = () => {
    const systemContext = React.useContext(SystemContext);
    const navTree = systemContext?.navRoot ?? {};
    const contactLeafs = systemContext?.contentRoot?.contact?.leafs;
    const commonLeafs = systemContext?.contentRoot?.common?.leafs;
    const textContent = contactLeafs?.contactForm?.textContent;
    const commonAssetUrls = commonLeafs?.images?.assetUrls;

    // TODO: font validation has anomalies open ticket and implement fix
    const validationSchema = Yup.object().shape({
        from_name: Yup.string().required(textContent?.nameRequired ?? ''),
        from_email: Yup.string()
            .email(textContent?.emailRequired ?? '')
            .required(textContent?.emailAddressInvalid ?? ''),
        message: Yup.string().required(textContent?.messageRequired ?? ''),
    });

    const initialValues: FormValues = {
        from_name: '',
        from_email: '',
        message: '',
    };

    const handleSubmit = async (values: FormValues, actions: any) => {
        try {
            const isRecaptchaPass = await handleRecaptcha(
                textContent?.recaptchaTag ?? 'CONTACT_FORM',
                process?.env?.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY ?? '',
            );

            if (!isRecaptchaPass) {
                return;
            } else {
                const { from_name, from_email, message } = values;

                if (navTree?.api?.leafs?.email?.path) {
                    const response = await fetch(commonAssetUrls?.emailApi ?? '', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            from_name: from_name,
                            from_email: from_email,
                            message: message,
                        }),
                    });

                    response.json();
                }
            }
        } catch (error: any) {
            console.error(error.message);
        }

        actions.setSubmitting(false);
        actions.resetForm();
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
                <StyledForm>
                    <StyledField
                        placeholdercolor={'#0C7B93'}
                        type="text"
                        placeholder={textContent?.namePlaceholder ?? ''}
                        name="from_name"
                        padding={'0 0 0 1rem'}
                    />
                    <StyledField
                        margin={'43px 0px 0px 0px'}
                        padding={'0 0 0 1rem'}
                        placeholdercolor={'#0C7B93'}
                        type="email"
                        placeholder={textContent?.emailPlaceholder ?? ''}
                        name="from_email"
                    />
                    <StyledField
                        margin={'43px 0px 43px 0px '}
                        padding={'1rem 0 0 1rem'}
                        height={'320px'}
                        placeholdercolor={'#0C7B93'}
                        component="textarea"
                        placeholder={textContent?.messagePlaceholder ?? ''}
                        name="message"
                    />
                    <ContactButton type="submit" disabled={isSubmitting} className="hero-content">
                        {textContent?.sendButtonText ?? ''}
                    </ContactButton>
                </StyledForm>
            )}
        </Formik>
    );
};

export default ContactForm;
