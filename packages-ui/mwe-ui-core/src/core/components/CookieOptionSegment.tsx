import { useState } from 'react';
import { CookieOption } from '../types';
import { CheckBox } from '../../ui-interactive';

export type CookieOptionSegmentProps = {
    checked: boolean;
    option: CookieOption;
    onChange: (id: string, checked: boolean) => void;
};

export default function CookieOptionSegment({
    onChange,
    option,
    checked,
}: CookieOptionSegmentProps) {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="rounded-lg border border-tertiary bg-primary p-3">
            <div className="flex items-center justify-between gap-3">
                <button onClick={toggleExpanded} className="text-left text-white hover:text-gray-300 transition-colors">
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
                    <div className="mt-3 pt-3 border-t border-white text-sm text-gray-300">{option.details}</div>

                    <div className="mt-3 flex justify-end">
                        <CheckBox id={option.id} name={option.id} checked={checked} onChange={() => onChange(option.id, !checked)} />
                    </div>
                </>
            )}
        </div>
    );
}
