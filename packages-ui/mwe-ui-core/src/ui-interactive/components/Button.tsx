import { PropsWithChildren } from 'react';
import { ButtonType } from '../types';

export type ButtonProps = {
    type: ButtonType;
    onClick?: () => void;
} & PropsWithChildren;

export function Button({type, onClick, children}: ButtonProps) {
    return (
        <button
            className="align-middle text-center transition-all text-s py-3 px-6 rounded-md bg-primary text-primary drop-shadow-sm shadow-primary border border-transparent disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:border-accent hover:shadow-lg hover:shadow-primary focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
        >
            {children ?? ''}
        </button>
    );
}
