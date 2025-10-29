'use client';
import React, { useEffect, useState } from 'react';
import { CookieService, CookieConsentData } from '../services/CookieService';
import { CheckBox } from '../../ui-interactive';

type CookieOption = {
    id: string;
    description: string;
    details: string;
    visible: boolean;
};

const CookieOptions: Record<string, CookieOption> = {
    acceptAll: {
        id: 'acceptAll',
        description: 'Accept All Cookies',
        details: 'Accept all cookies including analytics and advertisement cookies. This helps us provide you with the best possible experience.',
        visible: true,
    },
    acceptAdvertisement: {
        id: 'acceptAdvertisement',
        description: 'Accept Advertisement Cookies',
        details: 'These cookies allow us to show you personalized advertisements based on your browsing behavior and interests.',
        visible: true,
    },
    acceptTestCookies: {
        id: 'acceptTestCookies',
        description: 'Accept Test Cookies',
        details: 'Test cookies are used for development and testing purposes. They help us ensure the website works correctly.',
        visible: true,
    },
};

const CookieOptionComponent: React.FC<{
    option: CookieOption;
    checked: boolean;
    onChange: (id: string, checked: boolean) => void;
}> = ({ option, checked, onChange }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const handleCheckboxChange = () => {
        onChange(option.id, !checked);
    };

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="rounded-lg border border-tertiary bg-primary p-3">
            <div className="flex items-center justify-between gap-3">
                <button
                    onClick={toggleExpanded}
                    className="text-left text-white hover:text-gray-300 transition-colors"
                >
                    {option.description}
                </button>

                <button
                    onClick={toggleExpanded}
                    className="text-white hover:text-gray-300 transition-transform ml-2"
                    style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                    ▼
                </button>
            </div>

            {isExpanded && (
                <>
                    <div className="mt-3 pt-3 border-t border-white text-sm text-gray-300">
                        {option.details}
                    </div>

                    <div className="mt-3 flex justify-end">
                        <CheckBox
                            id={option.id}
                            name={option.id}
                            checked={checked}
                            onChange={handleCheckboxChange}
                        />
                    </div>
                </>
            )}  
        </div>
    );
};

const CookieConsent: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [cookieStates, setCookieStates] = useState<CookieConsentData>({});

    useEffect(() => {
        const data = CookieService.get();
        if (!data) {
            console.log('data:', data);
            setVisible(true);
            const initialStates: CookieConsentData = {};
            Object.keys(CookieOptions).forEach((key) => {
                initialStates[CookieOptions[key].id] = false;
            });
            setCookieStates(initialStates);
        } else {
            setVisible(false);
            const mergedStates: CookieConsentData = {};
            Object.keys(CookieOptions).forEach((key) => {
                mergedStates[CookieOptions[key].id] = data[CookieOptions[key].id] || false;
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
        Object.keys(CookieOptions).forEach((key) => {
            declineData[CookieOptions[key].id] = false;
        });
        CookieService.save(declineData);
        setVisible(false);
    };

    const handleAcceptAll = () => {
        const acceptAllData: CookieConsentData = {};
        Object.keys(CookieOptions).forEach((key) => {
            acceptAllData[CookieOptions[key].id] = true;
        });
        CookieService.save(acceptAllData);
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed right-0 bottom-0 left-0 flex h-auto w-full max-w-2xl flex-col space-y-5 rounded-lg bg-primary p-5 md:mx-auto md:h-auto md:w-100 lg:mx-auto lg:w-1/2 z-50">
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
                {Object.values(CookieOptions).filter((opt) => opt.visible).map((option) => (
                    <CookieOptionComponent
                        key={option.id}
                        option={option}
                        checked={cookieStates[option.id] || false}
                        onChange={handleOptionChange}
                    />
                ))}
            </div>

            <div className="flex justify-end space-x-3">
                <button className="rounded bg-gray-700 p-2 px-4 text-white hover:bg-gray-600" onClick={handleDecline}>
                    Decline All
                </button>
                <button className="rounded bg-info p-2 px-4 text-white hover:bg-info" onClick={handleAccept}>
                    Save Preferences
                </button>
                <button
                    className="rounded bg-secondary p-2 px-4 text-white hover:bg-secondary"
                    onClick={handleAcceptAll}
                >
                    Accept All
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
