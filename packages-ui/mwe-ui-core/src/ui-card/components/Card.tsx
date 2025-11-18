import { Button } from '../../ui-interactive/components/Button';
import React from 'react';

type CardVariant = 'default' | 'accent' | 'muted' | 'image' | 'icon' | 'actions' | 'status';

type CardAction = {
    text: string;
    onClick?: () => void;
    color?: string;
};

type CardData = {
    title: string;
    description: string;
    variant?: CardVariant;
    buttonText?: string;
    buttonAction?: () => void;
    imageSrc?: string;
    icon?: string;
    actions?: CardAction[];
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
	icon,
	actions
}: CardData) {
	const classes = variantClasses[variant];

	return (
		<div className={classes.container}>
			{imageSrc && variant === 'image' && (
				<div className="relative h-32 w-full overflow-hidden bg-gray-100">
					<img
						src={imageSrc}
						alt={title}
						className="w-full h-full object-contain"
					/>
				</div>
			)}

			<div className={
				variant === 'image' ? 'p-6 flex-1 flex flex-col' :
				variant === 'icon' ? 'w-full flex flex-col items-center justify-center' : ''
			}>
				{icon && variant === 'icon' && (
					<span className="material-icons text-accent text-3xl mb-2">{icon}</span>
				)}

				<h3 className={classes.title}>{title}</h3>
				<p className={classes.description}>
					{description}
				</p>

				{variant === 'actions' && Array.isArray(actions) && actions.length > 0 ? (
					<div className="flex gap-2 mt-2">
						{actions.map((action, idx) => (
							<Button
								key={idx}
								size="sm"
								color={action.color || classes.button}
								onClick={action.onClick}
							>
								{action.text}
							</Button>
						))}
					</div>
				) : (
					buttonText && (
						<Button
							variant={
								variant === 'accent' ? 'primary' :
								variant === 'muted' ? 'secondary' :
								variant === 'status' ? 'danger' :
								'primary'
							}
							size="sm"
							color={classes.button}
							onClick={buttonAction}
							className={classes.button}
							disabled={false}
						>
							{buttonText}
						</Button>
					)
				)}
			</div>
		</div>
	);
}
