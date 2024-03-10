import React from 'react';
import { UniversalRadio } from '../types';
import { AudioPlayerContext } from '../context';
import { VisibilityHidden } from '../styles';

type AudioPlayerProps = UniversalRadio;

const AudioPlayer: React.FC<AudioPlayerProps> = (props) => {
    const { preload, mediaSource, alternativeMediaSource } = props;

    const playerContext = React.useContext(AudioPlayerContext);
    const playerRef = React.useRef<HTMLAudioElement>(null);

    React.useEffect(() => {
        const effect = async () => {
            if (playerRef.current) {
                playerContext.setPlayerRef(playerRef.current);
            }
        };
        effect();
    }, []);

    return (
        <VisibilityHidden id="audio-player-main" controls ref={playerRef} preload={preload} muted>
            <source src={mediaSource.sourceUrl} type={mediaSource.mediaType} />
            <a href={mediaSource.sourceUrl}>{mediaSource.sourceUrl}</a>

            {alternativeMediaSource ? (
                <source src={alternativeMediaSource.sourceUrl} type={alternativeMediaSource.mediaType} />
            ) : (
                ''
            )}
            {alternativeMediaSource ? (
                <a href={alternativeMediaSource.sourceUrl}>{alternativeMediaSource.sourceUrl}</a>
            ) : (
                ''
            )}
        </VisibilityHidden>
    );
};

export default AudioPlayer;
