import { useState } from 'react';
import { cookieService } from '../services';
import { CookieConsentData } from '../types';
import CookieOptionSegment from './CookieOptionSegment';

//TODO: add cookie option to AppContext in future iteration
import { CookieOptions } from '../CookieOptions';

export default function CookieConsent() {
    const [visible, setVisible] = useState<boolean>(false);
    const [cookieStates, setCookieStates] = useState<CookieConsentData>({});

    const data = cookieService.get();
    if (!data) {
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
        cookieService.save(cookieStates);
        setVisible(false);
    };

    const handleDecline = () => {
        const declineData: CookieConsentData = {};
        Object.keys(CookieOptions).forEach((key) => {
            declineData[CookieOptions[key].id] = false;
        });
        cookieService.save(declineData);
        setVisible(false);
    };

    const handleAcceptAll = () => {
        const acceptAllData: CookieConsentData = {};
        Object.keys(CookieOptions).forEach((key) => {
            acceptAllData[CookieOptions[key].id] = true;
        });
        cookieService.save(acceptAllData);
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
                {Object.values(CookieOptions)
                    .filter((opt) => opt.visible)
                    .map((option) => (
                        <CookieOptionSegment
                            key={option.id}
                            option={option}
                            checked={cookieStates[option.id] || false}
                            onChange={() => handleOptionChange(option.id, !cookieStates[option.id])}
                        />
                    ))}
            </div>

            <div className="flex justify-end space-x-3">
                <button className="rounded bg-primary p-2 px-4 text-white hover:bg-secondary" onClick={handleDecline}>
                    Decline All
                </button>
                <button className="rounded bg-primary p-2 px-4 text-white hover:bg-secondary" onClick={handleAccept}>
                    Save Preferences
                </button>
                <button className="rounded bg-secondary p-2 px-4 text-white hover:bg-accent" onClick={handleAcceptAll}>
                    Accept All
                </button>
            </div>
        </div>
    );
}
