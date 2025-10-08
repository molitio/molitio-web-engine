'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { CookieService } from '../services/CookieService';
import Button from '../../ui-interactive/components/Button';

const CookieConsent: React.FC = () => {
    const [cookieAcceptAllButtonState, setCookieAcceptAllButtonState] = useState<'yes' | 'no'>('no');
    const [cookieAcceptAdvertisementButtonState, setCookieAcceptAdvertisementButtonState] = useState<'yes' | 'no'>(
        'no',
    );
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        const data = CookieService.get();
        if (!data) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, []);

    const handleAccept = () => {
        CookieService.save({
            acceptAll: cookieAcceptAllButtonState === 'yes',
            acceptAdvertisement: cookieAcceptAdvertisementButtonState === 'yes',
        });
        setVisible(false);
    };

    const handleDecline = () => {
        CookieService.save({
            acceptAll: false,
            acceptAdvertisement: false,
        });
        setVisible(false);
    };

    if (!visible) return null;
    return (
        <>
            <div className="fixed right-0 bottom-0 left-0 flex h-auto w-full max-w-2xl flex-col space-y-5 rounded-lg bg-blue-950 p-5 md:mx-auto md:h-auto md:w-100 lg:mx-auto lg:w-1/2">
                <div className="grid grid-cols-1">
                    <h3 className="text-left text-white">Cookie Concent</h3>
                </div>
                <div className="flex flex-wrap md:flex-wrap lg:flex-wrap">
                    <h3 className="text-left text-white">
                        We use cookies to improve your browsing experience, to show personalized content, and to analyze
                        our traffic. You can choose to accept all cookies or manage your preferences.
                    </h3>
                </div>

                <div className="space-y-7">
                    <div className="grid grid-cols-[1fr_auto] justify-between text-white">
                        <span className="text-left">Accept All Cookies</span>
                        <div className="flex space-x-5">
                            <button
                                className={`rounded p-1 px-2 hover:bg-gray-500 ${
                                    cookieAcceptAllButtonState === 'yes' ? 'bg-gray-500' : ''
                                }`}
                                onClick={() => {
                                    setCookieAcceptAllButtonState('yes');
                                    setCookieAcceptAdvertisementButtonState('yes');
                                }}
                            >
                                Yes
                            </button>
                            <button
                                className={`rounded p-1 px-2 hover:bg-gray-500 ${
                                    cookieAcceptAllButtonState === 'no' ? 'bg-gray-500' : ''
                                }`}
                                onClick={() => {
                                    setCookieAcceptAllButtonState('no');
                                    setCookieAcceptAdvertisementButtonState('no');
                                }}
                            >
                                No
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-[1fr_auto] justify-between text-white">
                        <span className="text-left">Accept Advertisement Cookies</span>
                        <div className="flex space-x-5">
                            <button
                                className={`rounded p-1 px-2 hover:bg-gray-500 ${
                                    cookieAcceptAdvertisementButtonState === 'yes' ? 'bg-gray-500' : ''
                                }`}
                                onClick={() => {
                                    setCookieAcceptAllButtonState('yes');
                                    setCookieAcceptAdvertisementButtonState('yes');
                                }}
                            >
                                Yes
                            </button>
                            <button
                                className={`rounded p-1 px-2 hover:bg-gray-500 ${
                                    cookieAcceptAdvertisementButtonState === 'no' ? 'bg-gray-500' : ''
                                }`}
                                onClick={() => {
                                    setCookieAcceptAllButtonState('no');
                                    setCookieAcceptAdvertisementButtonState('no');
                                }}
                            >
                                No
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-end space-x-3">
                        <button
                            className="rounded bg-gray-300 p-1 px-2 text-black"
                            onClick={() => {
                                handleAccept();
                            }}
                        >
                            Accept
                        </button>
                        <button
                            className="rounded bg-gray-300 p-1 px-2 text-black"
                            onClick={() => {
                                handleDecline();
                            }}
                        >
                            Decline
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CookieConsent;
