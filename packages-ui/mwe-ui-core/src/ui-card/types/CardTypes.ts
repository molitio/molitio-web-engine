import { ButtonRounded, ButtonSize } from '../../ui-interactive';

export type CardVariant = 'default' | 'accent' | 'muted' | 'image' | 'icon' | 'actions' | 'status';
export type CardStatus = 'ready' | 'loading' | 'disabled';
export type ButtonVariants = 'primary' | 'secondary' | 'outlined' | 'danger';
export type CardActionOrientation = 'row' | 'column' | 'grid';

export type ButtonActionVariant = {
    variant: ButtonVariants;
    color?: string;
    backgroundColor?: string;
    rounded?: ButtonRounded;
    size?: ButtonSize;
    fullWidth?: boolean;
    onClick?: () => void;
};

export type CardAction = {
    content: string | React.ReactNode;
    variant?: ButtonActionVariant;
};
