import { DeviceTypes } from '../../ui-platform';

export type AudioPlayerState = {
    playerRef?: HTMLAudioElement | null;
    playButtonRef?: HTMLElement | SVGGElement | SVGElement | null;
    isPlaying: boolean;
    isMuted: boolean;
    isLoading: boolean;
    volume?: number;
    deviceContext?: DeviceTypes;
    setPlayerRef: (ref: HTMLAudioElement | null) => null;
    setPlayButtonRef: (ref: HTMLElement | SVGGElement | SVGElement | null) => null;
};
