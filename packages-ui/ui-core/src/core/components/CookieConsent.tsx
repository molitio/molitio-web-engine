'use client';
import React, { useEffect, useState } from 'react';
import { CookieService, CookieConsentData } from '../services/CookieService';
import { CheckBox } from '../../ui-interactive';

type CookieOption = {
    id: string;
    description: string;
    visible: boolean;
};

const CookieOptions: CookieOption[] = [
    {
        id: 'acceptAll',
        description: 'Accept All Cookies',
        visible: true,
    },
    {
        id: 'acceptAdvertisement',
        description: 'Accept Advertisement Cookies',
        visible: true,
    },
    {
        id: 'acceptTestCookies',
        description: 'Accept Test Cookies',
        visible: true,
    },
];

const CookieOptionComponent: React.FC<{
    option: CookieOption;
    checked: boolean;
    onChange: (id: string, checked: boolean) => void;
}> = ({ option, checked, onChange }) => {
    const handleCheckboxChange = () => {
        onChange(option.id, !checked);
    };

    return (
        <div className="grid grid-cols-[1fr_auto] items-center justify-between text-white">
            <label htmlFor={option.id} className="text-left cursor-pointer">
                {option.description}
            </label>
            <div className="flex space-x-2 items-center">
                <CheckBox id={option.id} name={option.id} checked={checked} onChange={handleCheckboxChange} />
            </div>
        </div>
    );
};

const CookieConsent: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [cookieStates, setCookieStates] = useState<CookieConsentData>({});

    useEffect(() => {
        const data = CookieService.get();
        if (!data) {
            setVisible(true);
            const initialStates: CookieConsentData = {};
            CookieOptions.forEach((opt) => {
                initialStates[opt.id] = false;
            });
            setCookieStates(initialStates);
        } else {
            setVisible(false);
            const mergedStates: CookieConsentData = {};
            CookieOptions.forEach((opt) => {
                mergedStates[opt.id] = data[opt.id] || false;
            });
            setCookieStates(mergedStates);
        }
    }, []);

    const handleOptionChange = (id: string, checked: boolean) => {
        setCookieStates((prev) => {
            const newState = {
                ...prev,
                [id]: checked,
            };
            return newState;
        });
    };

    const handleAccept = () => {
        CookieService.save(cookieStates);
        setVisible(false);
    };

    const handleDecline = () => {
        const declineData: CookieConsentData = {};
        CookieOptions.forEach((opt) => {
            declineData[opt.id] = false;
        });
        CookieService.save(declineData);
        setVisible(false);
    };

    const handleAcceptAll = () => {
        const acceptAllData: CookieConsentData = {};
        CookieOptions.forEach((opt) => {
            acceptAllData[opt.id] = true;
        });
        CookieService.save(acceptAllData);
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed right-0 bottom-0 left-0 flex h-auto w-full max-w-2xl flex-col space-y-5 rounded-lg bg-blue-950 p-5 md:mx-auto md:h-auto md:w-100 lg:mx-auto lg:w-1/2 z-50">
            <div className="grid grid-cols-1">
                <h3 className="text-left text-white text-xl font-bold">Cookie Consent</h3>
            </div>
            <div className="flex flex-wrap">
                <p className="text-left text-white">
                    We use cookies to improve your browsing experience, to show personalized content, and to analyze our
                    traffic. You can choose to accept all cookies or manage your preferences.
                </p>
            </div>

            <div className="space-y-3">
                {CookieOptions.filter((opt) => opt.visible).map((option) => (
                    <CookieOptionComponent
                        key={option.id}
                        option={option}
                        checked={cookieStates[option.id] || false}
                        onChange={handleOptionChange}
                    />
                ))}
            </div>

            <div className="flex justify-end space-x-3">
                <button className="rounded bg-gray-600 p-2 px-4 text-white hover:bg-gray-700" onClick={handleDecline}>
                    Decline All
                </button>
                <button className="rounded bg-blue-600 p-2 px-4 text-white hover:bg-blue-700" onClick={handleAccept}>
                    Save Preferences
                </button>
                <button
                    className="rounded bg-green-600 p-2 px-4 text-white hover:bg-green-700"
                    onClick={handleAcceptAll}
                >
                    Accept All
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
