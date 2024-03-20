import { TComponentContent } from './TComponentContent';
import { TMolitioId } from './TMolitioId';
import { TVideo } from './TVideo';

export type TPageContent = {
    molitioId: TMolitioId;
    title: string;
    textContent?: string;
    dateCreated?: string;
    imagesUrl?: Map<string, string>;
    youTubeIds?: Map<string, TVideo>;
    componentContent?: Map<string, TComponentContent>;
};
