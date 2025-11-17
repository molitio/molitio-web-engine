import React from 'react';

type CardVariant = 'default' | 'accent' | 'muted' | 'image' | 'icon' | 'actions' | 'status';

type CardData = {
	title: string;
	description: string;
	variant?: CardVariant;
	buttonText?: string;
	buttonAction?: () => void;
	imageSrc?: string;
	icon?: string;
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
        title: 'font-semibold text-lg text-primary mb-2',
        description: 'text-secondary mb-4',
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
	icon
}: CardData) {
	const classes = variantClasses[variant];

	return (
		<div className={classes.container}>
			<h3 className={classes.title}>{title}</h3>
				<p className={classes.description}>
					{description}
				</p>
				<button className={classes.button}>
					{buttonText}
				</button>
		</div>
	);
}
