import { Suspense } from 'react';
import { Button } from '../../ui-interactive';
import { Loading } from '../../ui-common';
import { cardStyleVariants, cardActionOrientationClasses } from '../constants';
import { CardAction, CardActionOrientation, CardStatus, CardVariant } from '../types';

/* 
TODO: refactor card to get an array of actions, that define the ButtonActionVariant type memebers and other action related parameters
*/
export type CardProps = {
    title: string;
    description: string;
    variant?: CardVariant;
    imageSrc?: string;
    imageAlt?: string;
    icon?: string;
    actions?: CardAction[];
    actionOrientation?: CardActionOrientation;
    status?: CardStatus;
};

export default function Card({
    title,
    description,
    variant = 'default',
    imageSrc,
    imageAlt,
    icon,
    actions,
    actionOrientation = 'row',
    status = 'ready',
}: CardProps) {
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

                {Array.isArray(actions) && actions.length > 0 ? (
                    <div className="flex gap-2 mt-2">
                        {/* TODOD: add classname to disable default list style.  */}
                        <ul className={cardActionOrientationClasses[actionOrientation]}>
                            {actions.map((action, index) => (
                                <li key={index} className={action.variant?.fullWidth ? 'w-full' : ''}>
                                    <Button
                                        size={action.variant?.size}
                                        rounded={action.variant?.rounded}
                                        variant={action.variant?.variant}
                                        fullWidth={action.variant?.fullWidth}
                                        onClick={action.variant?.onClick}
                                        disabled={isInactive}
                                    >
                                        <div className={action.variant?.color}>{action.content}</div>
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}
