import { Suspense } from 'react';
import { Button, ButtonRounded } from '../../ui-interactive';
import { Loading } from '../../ui-common';
import { cardStyleVariants } from '../constants';

export type CardVariant = 'default' | 'accent' | 'muted' | 'image' | 'icon' | 'actions' | 'status';
export type CardStatus = 'ready' | 'loading' | 'disabled';
export type ButtonVariants = 'primary' | 'secondary' | 'outlined' | 'danger';

export type ButtonActionVariant = {
    color?: string;
    backgroundColor?: string;
    variant: ButtonVariants;
    rounded?: ButtonRounded;
    onClick?: () => void;
};

export type CardAction = {
    content: string | React.ReactNode;
    variant?: ButtonActionVariant;
};

/* 
TODO: refactor card to get an array of actions, that define the ButtonActionVariant type memebers and other action related parameters
*/
export type CardData = {
    title: string;
    description: string;
    variant?: CardVariant;
    /*     buttonVariant?: ButtonVariants; */
    /*     buttonText?: string; */
    /*  buttonAction?: () => void; */
    imageSrc?: string;
    imageAlt?: string;
    icon?: string;
    actions?: CardAction[];
    status?: CardStatus;
};

export default function Card({
    title,
    description,
    variant = 'default',
    /*     buttonVariant = 'outlined',
    buttonText,
    buttonAction, */
    imageSrc,
    imageAlt,
    icon,
    actions,
    status = 'ready',
}: CardData) {
    const classes = cardStyleVariants[variant];
    const isLoading = status === 'loading';
    const isDisabled = status === 'disabled';
    const isInactive = isLoading || isDisabled;
    const cardContainerClass = `${classes.container} relative ${isInactive ? 'opacity-50 cursor-not-allowed' : ''}`;

    return (
        <div className={cardContainerClass} aria-disabled={isInactive}>
            {/* Spinner overlay for loading, z-50 for stacking above all 
            TODO: 
            - refactor variant logic ~L110 - ~L120
            - handle suspense in the whole component 
            - create an example in john-glenn-ui app where a task waits 10 sec to load, than loads, than waits again and so on.
            
            
            */}
            <Suspense
                fallback={
                    <>
                        chose:
                        <Loading />
                        or:
                        <span className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
                            <span className="animate-spin rounded-full h-6 w-6 border-4 border-t-transparent border-gray-700"></span>
                        </span>
                    </>
                }
            >
                {isLoading && (
                    <span className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
                        <span className="animate-spin rounded-full h-6 w-6 border-4 border-t-transparent border-gray-700"></span>
                    </span>
                )}
            </Suspense>

            {imageSrc && variant === 'image' && (
                <div className="relative h-32 w-full overflow-hidden bg-gray-100">
                    <img
                        src={imageSrc}
                        alt={imageAlt || title}
                        className="w-full h-full object-contain"
                        loading="lazy"
                    />
                </div>
            )}

            <div
                className={
                    variant === 'image'
                        ? 'p-6 flex-1 flex flex-col'
                        : variant === 'icon'
                          ? 'w-full flex flex-col items-center justify-center'
                          : ''
                }
            >
                {icon && variant === 'icon' && <span className="material-icons text-accent text-3xl mb-2">{icon}</span>}

                <h3 className={classes.title}>{title}</h3>
                <p className={classes.description}>{description}</p>

                {variant === 'actions' && Array.isArray(actions) && actions.length > 0 ? (
                    <div className="flex gap-2 mt-2">
                        {actions.map((action) => (
                            <Button
                                key={action.content}
                                size="sm"
                                rounded=""
                                variant={action.variant ?? buttonVariant}
                                onClick={action.onClick}
                                disabled={isInactive}
                            >
                                <div className={`${action.color ? action.color : ''}`}>{action.content}</div>
                            </Button>
                        ))}
                    </div>
                ) : (
                    buttonText && (
                        <Button
                            variant={buttonVariant}
                            size="sm"
                            onClick={buttonAction}
                            disabled={isInactive}
                            loading={false}
                        >
                            {buttonText}
                        </Button>
                    )
                )}
            </div>
        </div>
    );
}
