'use client';

import React from 'react';

/* import { Formik, Form, Field } from 'formik';
 */
const QuoteRequestForm: React.FC = () => {
    /*     const initialValues = {
        firstName: '',
    };
 */
    return (
        <div className="w-full bg-white drop-shadow-xl border border-black/20  rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5 ">
            <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
                <img src="export.png" alt="login" className="h-[500px]" />
            </div>
            <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
                <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#4A07DA]">Árajánlat kérés:</h1>
                <div className="w-full mt-5 sm:mt-8">
                    <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="text"
                                placeholder="Cég név"
                                className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
                            />
                            <input
                                type="text"
                                placeholder="Kapcsolat tartó személy"
                                className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="text"
                                placeholder="E mail cím"
                                className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
                            />
                            <input
                                type="text"
                                placeholder="Telefonszám"
                                className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
                            />
                        </div>
                        <h2>Munka feladat:</h2>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="text"
                                placeholder="Felrakó hely:"
                                className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
                            />
                            <input
                                type="date"
                                placeholder="Lerakás időpont:"
                                className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
                            />
                            <input
                                type="text"
                                placeholder="Időpont:"
                                className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="text"
                                placeholder="Lerakó hely:"
                                className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
                            />
                            <input
                                type="date"
                                placeholder="Lerakási dátum"
                                className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
                            />
                            <input
                                type="text"
                                placeholder="Időpont:"
                                className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Áru megnevezése"
                            className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                        />
                        <input
                            type="text"
                            placeholder="Áru súly"
                            className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                        />
                        <input
                            type="text"
                            placeholder="Megjegyzés"
                            className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                        />
                        <div className="flex items-center gap-1.5  justify-start pl-2">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input type="checkbox" className="checkbox-xs checkbox-primary" />
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                            <button className="btn btn-active btn-primary btn-block max-w-[200px]">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteRequestForm;
