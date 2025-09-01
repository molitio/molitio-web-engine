export type SupportedLanguages = 'en' | 'hu';

export type TextContentNode = {
    [lng in SupportedLanguages]: {
        textContent?: string;
    };
};
