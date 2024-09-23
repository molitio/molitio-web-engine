'use client';

import React from 'react';
import { Field, Form, Formik } from 'formik';

export default function Page() {
    const initialValues = {
        firstName: '',
    };

    return (
        <div className="pt-40 h-screen">
            <h1>Contact</h1>
            <p>Send us a message!</p>
            <div className="h-96">
                <div>
                    <Formik
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
                    </Formik>
                </div>
            </div>
        </div>
    );
}
