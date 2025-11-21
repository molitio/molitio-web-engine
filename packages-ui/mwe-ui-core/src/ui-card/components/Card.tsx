import { Button } from '../../ui-interactive'

export type CardVariant = 'default' | 'accent' | 'muted' | 'image' | 'icon' | 'actions' | 'status';
export type CardStatus = 'ready' | 'loading' | 'disabled';

export type CardAction = {
    text: string;
    onClick?: () => void;
    color?: string;
};

export type CardData = {
    title: string;
    description: string;
    variant?: CardVariant;
    buttonText?: string;
    buttonAction?: () => void;
    imageSrc?: string;
    imageAlt?: string;
    icon?: string;
    actions?: CardAction[];
    status?: CardStatus;
};

const variantClasses = {
    default: {
        container: 'bg-white rounded-lg shadow-lg p-6 border border-gray-200',
        title: 'font-semibold text-lg text-primary mb-2',
        description: 'text-secondary mb-4',
        button: 'bg-primary text-white px-3 py-1 rounded hover:bg-primary/80 transition',
    },
    accent: {
        container: 'bg-white rounded-lg shadow-lg p-6 border-2 border-accent',
        title: 'font-semibold text-lg text-accent mb-2',
        description: 'text-secondary mb-4',
        button: 'bg-accent text-white px-3 py-1 rounded hover:bg-accent/80 transition',
    },
    muted: {
        container: 'bg-muted rounded-lg shadow-inner p-6 border border-gray-300',
        title: 'font-semibold text-lg text-primary mb-2',
        description: 'text-secondary mb-4',
        button: 'bg-secondary text-white px-3 py-1 rounded hover:bg-primary transition',
    },
    status: {
        container: 'bg-white rounded-lg shadow-lg p-6 border border-success',
        title: 'font-semibold text-lg text-success mb-2',
        description: 'text-secondary mb-4',
        button: 'bg-success text-white px-3 py-1 rounded hover:bg-success/80 transition',
    },
    image: {
        container: 'bg-white rounded-lg shadow-lg p-0 border border-gray-200 flex flex-col overflow-hidden',
        title: 'font-semibold text-lg text-primary mb-2',
        description: 'text-secondary mb-4',
        button: 'bg-primary text-white px-3 py-1 rounded hover:bg-accent transition',
    },
    icon: {
        container: 'bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col items-center',
        title: 'font-semibold text-lg text-primary mb-2 text-center',
        description: 'text-secondary mb-4 text-center',
        button: 'bg-accent text-white px-3 py-1 rounded hover:bg-accent/80 transition',
    },
    actions: {
        container: 'bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col',
        title: 'font-semibold text-lg text-primary mb-2',
        description: 'text-secondary mb-4',
        button: 'bg-primary text-white px-3 py-1 rounded hover:bg-primary/80 transition',
    },
};

export default function Card({
    title,
    description,
    variant = 'default',
    buttonText,
    buttonAction,
    imageSrc,
    imageAlt,
    icon,
    actions,
    status = 'ready',
}: CardData) {
    const classes = variantClasses[variant];
    const isLoading = status === 'loading';
    const isDisabled = status === 'disabled';
    const isInactive = isLoading || isDisabled;
    const cardContainerClass = `${classes.container} relative ${isInactive ? 'opacity-50 cursor-not-allowed' : ''}`;

    return (
        <div className={cardContainerClass} aria-disabled={isInactive}>
            {/* Spinner overlay for loading, z-50 for stacking above all */}
            {isLoading && (
                <span className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
                    <span className="animate-spin rounded-full h-6 w-6 border-4 border-t-transparent border-gray-700"></span>
                </span>
            )}

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
                                key={action.text}
                                size="sm"
                                variant="primary"
                                onClick={action.onClick}
                                disabled={isInactive}
                            >
                                {action.text}
                            </Button>
                        ))}
                    </div>
                ) : (
                    buttonText && (
                        <Button
                            variant={
                                variant === 'accent'
                                    ? 'primary'
                                    : variant === 'muted'
                                      ? 'secondary'
                                      : variant === 'status'
                                        ? 'danger'
                                        : 'primary'
                            }
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
