import React from 'react';
import { AudioPlayerState } from '../types';

const AudioPlayerContext = React.createContext<AudioPlayerState>({
    isPlaying: false,
    isLoading: false,
    isMuted: false,
    volume: 0,
    deviceContext: undefined,
    setPlayerRef: () => null,
    setPlayButtonRef: () => null,
});

export default AudioPlayerContext;
