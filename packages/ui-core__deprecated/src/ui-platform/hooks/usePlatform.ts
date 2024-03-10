export const usePlatform = () => {
    return {
        isClient: () => typeof window !== 'undefined',
    };
};
