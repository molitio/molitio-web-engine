import React from 'react';
import { DeviceContext } from '../../ui-platform';
import { AudioPlayerState, AudioPlayerStateAction } from '../types';
import { AudioPlayerStateActionTypeTags } from '../tags';
import AudioPlayerContext from './AudioPlayerContext';

const AudioPlayerContextProvider: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;
    const deviceContext = React.useContext(DeviceContext);

    const playerStateReducer = (state: AudioPlayerState, action: AudioPlayerStateAction) => {
        const { actionType, payload } = action;
        const newState = { ...state };

        switch (actionType) {
            case AudioPlayerStateActionTypeTags.TOGGLE_LOADING:
                newState.isLoading = !state.isLoading;
                return {
                    ...state,
                    ...newState,
                };
            case AudioPlayerStateActionTypeTags.TOGGLE_PLAYING:
                if (!state.playerRef) {
                    return state;
                }

                newState.isMuted = state.isPlaying;
                newState.isPlaying = !state.isPlaying;

                if (newState.playerRef) {
                    newState.playerRef.muted = newState.isMuted;
                    if (!state.isPlaying) {
                        newState.playerRef
                            .play()
                            .then(() => {
                                return;
                            })
                            .catch((error) => {
                                console.error(error);
                            });
                    } else {
                        newState.playerRef.pause();
                    }
                }
                return {
                    ...state,
                    ...newState,
                };
            case AudioPlayerStateActionTypeTags.SET_PLAYER_REF:
                if (!payload?.playerRef) {
                    return state;
                }
                payload.playerRef.onloadstart = loadStarted;
                if (deviceContext.device === 'ios') {
                    payload.playerRef.onloadedmetadata = loadedContent;
                } else {
                    payload.playerRef.oncanplay = loadedContent;
                }
                newState.isMuted = payload.playerRef.muted;
                newState.playerRef = payload.playerRef;
                return {
                    ...state,
                    ...newState,
                };
            case AudioPlayerStateActionTypeTags.SET_PLAY_BUTTON_REF:
                if (!payload?.playButtonRef) {
                    return state;
                }
                switch (state?.deviceContext?.device) {
                    case 'ios':
                    case 'android':
                        payload.playButtonRef.ontouchstart = onTogglePlayEvent;
                        break;
                    default:
                        payload.playButtonRef.onclick = onTogglePlayEvent;
                        break;
                }

                newState.playButtonRef = payload.playButtonRef;
                return {
                    ...state,
                    ...newState,
                };
            default:
                return state;
        }
    };
    const setPlayerRef = (ref: HTMLAudioElement | null) => {
        dispatch({
            actionType: AudioPlayerStateActionTypeTags.SET_PLAYER_REF,
            payload: { ...playerState, playerRef: ref } as AudioPlayerState,
        });
        return null;
    };

    const setPlayButtonRef = (ref: HTMLElement | SVGElement | SVGGElement | null) => {
        dispatch({
            actionType: AudioPlayerStateActionTypeTags.SET_PLAY_BUTTON_REF,
            payload: { ...playerState, playButtonRef: ref } as AudioPlayerState,
        });
        return null;
    };

    const loadStarted = () => {
        dispatch({
            actionType: AudioPlayerStateActionTypeTags.TOGGLE_LOADING,
            payload: { ...playerState } as AudioPlayerState,
        });
    };

    const loadedContent = () => {
        dispatch({
            actionType: AudioPlayerStateActionTypeTags.TOGGLE_LOADING,
            payload: { ...playerState } as AudioPlayerState,
        });
    };

    const onTogglePlayEvent = (ev: TouchEvent | MouseEvent) => {
        ev.preventDefault();
        if (!playerState.playerRef) {
            return;
        }

        if (!playerState.isPlaying) {
            dispatch({
                actionType: AudioPlayerStateActionTypeTags.TOGGLE_PLAYING,
                payload: { ...playerState } as AudioPlayerState,
            });
        } else {
            dispatch({
                actionType: AudioPlayerStateActionTypeTags.TOGGLE_PLAYING,
                payload: { ...playerState } as AudioPlayerState,
            });
        }
    };

    const [playerState, dispatch] = React.useReducer<React.Reducer<AudioPlayerState, AudioPlayerStateAction>>(
        playerStateReducer,
        {
            isPlaying: false,
            isMuted: true,
            isLoading: false,
            deviceContext: deviceContext,
            setPlayerRef: setPlayerRef,
            setPlayButtonRef: setPlayButtonRef,
        },
    );

    return <AudioPlayerContext.Provider value={playerState}>{children}</AudioPlayerContext.Provider>;
};

export default AudioPlayerContextProvider;
