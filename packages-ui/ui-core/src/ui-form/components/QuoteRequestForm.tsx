'use client';

import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import QuoteRequestFormField from './QuoteRequestFromField';

const QuoteRequestFormSchema = Yup.object().shape({
    companyName: Yup.string()
        .min(2, 'A cégnév legalább 2 karakter hosszú kell, hogy legyen!')
        .max(50, 'A cégnév legfeljebb 50 karakter hosszú lehet!')
        .required('A cégnév megadása kötelező!'),
    email: Yup.string().email('Nem megfelelő e-mail cím formátum!').required('Az email cím megadása kötelező!'),
    contactPerson: Yup.string()
        .min(2, 'A kapcsolattartó személy neve legalább 2 karakter hosszú kell, hogy legyen!')
        .max(50, 'A kapcsolattartó személy neve legfeljebb 50 karakter hosszú lehet!')
        .required('A kapcsolattartó személy megadása kötelező!'),
    phoneNumber: Yup.string()
        .min(9, 'A telefonszám legalább 9 karakter hosszú kell, hogy legyen!')
        .max(20, 'A telefonszám legfeljebb 20 karakter hosszú lehet!')
        .required('A telefonszám megadása kötelező!'),
    pickupLocation: Yup.string()
        .min(2, 'A szállítás felvétel helye legalább 2 karakter hosszú kell, hogy legyen!')
        .max(50, 'A szállítás felvétel helye legfeljebb 50 karakter hosszú lehet!')
        .required('A szállítás felvétel helye megadása kötelező!'),
    pickupTime: Yup.date()
        .min(new Date(), 'A szállítás felvétel időpontja nem lehet korábbi, mint a jelenlegi dátum!')
        .required('A szállítás felvétel időpontja megadása kötelező!'),
    deliveryLocation: Yup.string()
        .min(2, 'A szállítás leadás helye legalább 2 karakter hosszú kell, hogy legyen!')
        .max(50, 'A szállítás leadás helye legfeljebb 50 karakter hosszú lehet!')
        .required('A szállítás leadás helye megadása kötelező!'),
    deliveryTime: Yup.date()
        .min(
            Yup.ref('pickupTime'),
            'A szállítás leadás időpontja nem lehet korábbi, mint a szállítás felvétel időpontja!',
        )
        .required('A szállítás leadás időpontja megadása kötelező!'),
    deliveryType: Yup.string()
        .min(2, 'A szállítmány típusa legalább 2 karakter hosszú kell, hogy legyen!')
        .max(50, 'A szállítmány típusa legfeljebb 50 karakter hosszú lehet!')
        .required('A szállítmány típusa megadása kötelező!'),
    deliveryWeight: Yup.number()
        .min(1, 'A szállítmány súlya legalább 1 kg kell, hogy legyen!')
        .max(10000, 'A szállítmány súlya legfeljebb 10.000 kg lehet!')
        .required('A szállítmány súlya megadása kötelező!'),
    comment: Yup.string().max(500, 'A megjegyzés legfeljebb 500 karakter hosszú lehet!'),
});

const QuoteRequestForm: React.FC = () => {
    return (
        <div className="flex flex-col xl:flex-row-reverse items-center py-[120px]">
            <div className="">
                <img src="export.png" alt="login" className="w-full" />
            </div>
            <div className="">
                <h1 className="text-center text-2xl sm:text-3xl font-semibold mb-gutter-bottom">Árajánlat kérés</h1>
                <Formik
                    initialValues={{
                        companyName: '',
                        email: '',
                        contactPerson: '',
                        phoneNumber: '',
                        pickupLocation: '',
                        pickupTime: '',
                        deliveryLocation: '',
                        deliveryTime: '',
                        deliveryType: '',
                        deliveryWeight: 0,
                        comment: '',
                    }}
                    validationSchema={QuoteRequestFormSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values);
                        setSubmitting(false);
                    }}
                >
                    <Form className="">
                        <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-4">
                            <QuoteRequestFormField>
                                <Field
                                    type="text"
                                    name="companyName"
                                    placeholder="Cég név"
                                    className="input input-bordered input-primary w-full font-semibold text-form-field placeholder:text-placeholder px-4 py-2 rounded-lg mb-1"
                                />
                                <ErrorMessage name="companyName" component="div" className="text-red-400 text-md" />
                            </QuoteRequestFormField>
                            <QuoteRequestFormField>
                                <Field
                                    type="text"
                                    name="email"
                                    placeholder="E mail cím"
                                    className="input input-bordered input-primary w-full font-semibold text-form-field placeholder:text-placeholder px-4 py-2 rounded-lg mb-1"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-400 text-md" />
                            </QuoteRequestFormField>
                            <QuoteRequestFormField>
                                <Field
                                    type="text"
                                    name="contactPerson"
                                    placeholder="Kapcsolattartó személy neve:"
                                    className="input input-bordered input-primary w-full font-semibold text-form-field placeholder:text-placeholder px-4 py-2 rounded-lg mb-1"
                                />
                                <ErrorMessage name="contactPerson" component="div" className="text-red-400 text-md" />
                            </QuoteRequestFormField>
                            <QuoteRequestFormField>
                                <Field
                                    type="text"
                                    name="phoneNumber"
                                    placeholder="Telefonszám:"
                                    className="input input-bordered input-primary w-full font-semibold text-form-field placeholder:text-placeholder px-4 py-2 rounded-lg mb-1"
                                />
                                <ErrorMessage name="phoneNumber" component="div" className="text-red-400 text-md" />
                            </QuoteRequestFormField>

                            <h2 className="text-primary">Munka feladat:</h2>
                            <QuoteRequestFormField>
                                <Field
                                    type="text"
                                    name="pickupLocation"
                                    placeholder="Felrakó hely:"
                                    className="input input-bordered input-primary w-full font-semibold text-form-field placeholder:text-placeholder px-4 py-2 rounded-lg mb-1"
                                />
                                <ErrorMessage name="pickupLocation" component="div" className="text-red-400 text-md" />
                            </QuoteRequestFormField>
                            <QuoteRequestFormField>
                                <Field
                                    type="date"
                                    name="pickupTime"
                                    placeholder="Lerakás időpont:"
                                    className="input input-bordered input-primary w-full font-semibold text-form-field placeholder:text-placeholder px-4 py-2 rounded-lg mb-1"
                                />
                                <ErrorMessage name="pickupTime" component="div" className="text-red-400 text-md" />
                            </QuoteRequestFormField>
                            <QuoteRequestFormField>
                                <Field
                                    type="text"
                                    name="deliveryLocation"
                                    placeholder="Lerakó hely:"
                                    className="input input-bordered input-primary w-full font-semibold text-form-field placeholder:text-placeholder px-4 py-2 rounded-lg mb-1"
                                />
                                <ErrorMessage
                                    name="deliveryLocation"
                                    component="div"
                                    className="text-red-400 text-md"
                                />
                            </QuoteRequestFormField>
                            <QuoteRequestFormField>
                                <Field
                                    type="date"
                                    name="deliveryTime"
                                    placeholder="Lerakási dátum"
                                    className="input input-bordered input-primary w-full font-semibold text-form-field placeholder:text-placeholder px-4 py-2 rounded-lg mb-1"
                                />
                                <ErrorMessage name="deliveryTime" component="div" className="text-red-400 text-md" />
                            </QuoteRequestFormField>
                            <QuoteRequestFormField>
                                <Field
                                    type="text"
                                    name="deliveryType"
                                    placeholder="Áru megnevezése"
                                    className="input input-bordered input-primary w-full font-semibold text-form-field placeholder:text-placeholder px-4 py-2 rounded-lg mb-1"
                                />
                            </QuoteRequestFormField>
                            <QuoteRequestFormField>
                                <Field
                                    type="number"
                                    name="deliveryWeight"
                                    placeholder="Áru súly"
                                    className="input input-bordered input-primary w-full font-semibold text-form-field placeholder:text-placeholder px-4 py-2 rounded-lg mb-1"
                                />
                                <span>Kg</span>
                            </QuoteRequestFormField>
                            <QuoteRequestFormField>
                                <Field
                                    type="text"
                                    name="comment"
                                    placeholder="Megjegyzés"
                                    className="input input-bordered input-primary w-full font-semibold text-form-field placeholder:text-placeholder px-4 py-2 rounded-lg mb-1"
                                />
                            </QuoteRequestFormField>
                            <div className="flex items-center gap-1.5  justify-start pl-2">
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <Field type="checkbox" className="checkbox-xs checkbox-primary" />
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <button className="text-1xl xl:text-2xl text-primary border-4 border-primary p-4 rounded-xl hover:bg-gradient-to-172 hover:border-0">
                                    Szállítmányozás igénylése
                                </button>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default QuoteRequestForm;
