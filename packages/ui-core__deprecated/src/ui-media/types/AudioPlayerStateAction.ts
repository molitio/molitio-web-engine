import { AudioPlayerStateActionTypeTags } from '../tags';
import { AudioPlayerState } from './AudioPlayerState';

export type AudioPlayerStateAction = {
    actionType: AudioPlayerStateActionTypeTags;
    payload?: AudioPlayerState;
};
