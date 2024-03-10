import React from 'react';
import { ButtonStyleVariantTags } from '../../ui-style-service';
import { Button, ButtonRectangle, ButtonRouded } from '../styles';

type DynamicButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    styleVariant?: ButtonStyleVariantTags;
    label?: string;
    padding?: string;
    fontSize?: string;
};

const DynamicButton: React.FC<DynamicButtonProps & React.PropsWithChildren> = (props) => {
    const { styleVariant = ButtonStyleVariantTags.Default, label, children } = props;

    const variant = (styleVariant: ButtonStyleVariantTags) => {
        switch (styleVariant) {
            case ButtonStyleVariantTags.ButtonRectangle:
                return ButtonRectangle;
            case ButtonStyleVariantTags.ButtonRounded:
                return ButtonRouded;
            default:
                return Button;
        }
    };

    return (
        <Button data-testid="dynamic-button" as={variant(styleVariant)}>
            {label ?? children}
        </Button>
    );
};

export default DynamicButton;
