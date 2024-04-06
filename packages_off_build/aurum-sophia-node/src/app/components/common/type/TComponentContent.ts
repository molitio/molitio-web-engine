import { TEvent } from './TEvent';
import { TMember } from './TMember';
import { TMolitioId } from './TMolitioId';

export type TComponentContent = TMember &
    TEvent & {
        title?: string;
        textContent?: string;
        dateCreated?: string;
        imagesUrl?: Map<string, string>;
    };
