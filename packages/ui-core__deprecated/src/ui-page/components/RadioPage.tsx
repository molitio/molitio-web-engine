import React from 'react';
import { AudioPlayer, AudioPlayerContextProvider, UniversalRadio } from '../../ui-media';
import {
    PageContainer,
    RadioPageContent,
    RadioPageFooter,
    RadioPageLogo,
    RadioPagePlayer,
    RadioPageSocialButtons,
} from '../styles';

type RadioPageProps = {
    playerElement?: JSX.Element;
    playButton?: JSX.Element;
    playButtonTopLogo?: JSX.Element;
    playButtonBackground?: JSX.Element;
    background?: JSX.Element;
    externalBackgroundEffect?: string;
    logo?: JSX.Element;
    socialButtons?: JSX.Element;
    radio: UniversalRadio;
    pageFooter?: JSX.Element;
};

const RadioPage: React.FC<RadioPageProps> = (props) => {
    const { background, logo, socialButtons, playerElement, radio, pageFooter } = props;

    return (
        <>
            {background}
            <PageContainer>
                <RadioPageLogo>{logo}</RadioPageLogo>
                <RadioPageSocialButtons>{socialButtons}</RadioPageSocialButtons>
                <div>
                    <RadioPageContent>
                        <RadioPagePlayer>
                            <AudioPlayerContextProvider>
                                <>
                                    {playerElement}
                                    <AudioPlayer
                                        mediaSource={{
                                            sourceUrl: radio.mediaSource.sourceUrl,
                                            mediaType: radio.mediaSource.mediaType,
                                        }}
                                        alternativeMediaSource={{
                                            sourceUrl: radio.alternativeMediaSource?.sourceUrl
                                                ? radio.alternativeMediaSource.sourceUrl
                                                : '',
                                            mediaType: radio.alternativeMediaSource?.mediaType
                                                ? radio.alternativeMediaSource.mediaType
                                                : 'audio/mpeg',
                                        }}
                                        preload={radio.preload}
                                    />
                                </>
                            </AudioPlayerContextProvider>
                        </RadioPagePlayer>
                    </RadioPageContent>
                </div>
                <RadioPageFooter>{pageFooter}</RadioPageFooter>
            </PageContainer>
        </>
    );
};

export default RadioPage;
