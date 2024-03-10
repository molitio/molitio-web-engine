import { PlayUrl } from './PlayUrl';

export type UniversalRadio = {
    preload: 'none' | 'auto' | 'metadata';
    mediaSource: PlayUrl;
    alternativeMediaSource?: PlayUrl;
};
