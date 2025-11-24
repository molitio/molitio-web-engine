export const cardInnerWrapperClasses: Record<string, string> = {
    image: 'p-6 flex-1 flex flex-col',
    icon: 'w-full flex flex-col items-center justify-center',
    default: '',
    accent: '',
    muted: '',
    status: '',
    actions: '',
};
export const cardStyleVariants = {
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

export const cardActionOrientationClasses = {
    row: 'flex flex-row flex-wrap gap-2 list-none p-0 m-0',
    column: 'flex flex-col gap-2 list-none p-0 m-0',
    grid: 'flex flex-row flex-wrap gap-2 list-none p-0 m-0',
};

export const cardActionItemClasses: Record<'row' | 'column' | 'grid', { fullWidth: string; default: string }> = {
    row: {
        fullWidth: 'w-full flex',
        default: 'flex',
    },
    column: {
        fullWidth: 'w-full flex',
        default: 'flex',
    },
    grid: {
        fullWidth: 'w-full basis-full flex',
        default: 'flex-1 min-w-0 basis-[calc(50%-0.25rem)] flex',
    },
};
