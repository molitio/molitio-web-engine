import React from 'react';

/* import { Formik, Form, Field } from 'formik';
 */
const ContactForm: React.FC = (props) => {
    const initialValues = {
        firstName: '',
    };

    return (
        <div>
    {/*         <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="First Name" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik> */}
        </div>
    );
};

export default ContactForm;
