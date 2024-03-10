import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
    RadioPage,
    LogoAppStore,
    LogoFreshPrint,
    LogoGooglePlay,
    LogoLedArt,
    LogoSenseRadio,
    SpeakerBackgroundPlayer,
    AppShell,
    SpanBlock,
    DefaultFooter,
    StripedBackground,
    ThemeNameTags,
    SocialButtonGroup,
} from '@molitio/ui-core__deprecated';

const embededImageSource =
    'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/image-store/radio_sense_effect.png';

export default {
    title: 'molitio-core/Apps/Radio Page',
    component: RadioPage,
    argTypes: {
        themeName: {
            control: {
                type: 'radio',
                options: [ThemeNameTags.BLACK_YELLOW, ThemeNameTags.TEAM_JAMAICA],
            },
        },
        applyGlobalStyleRules: {
            control: { type: 'radio', options: [true, false] },
        },
    },
    args: {
        themeName: ThemeNameTags.BLACK_YELLOW,
        applyGlobalStyleRules: true,
    },
} as ComponentMeta<typeof RadioPage>;

export const RadioPageStory: ComponentStory<typeof RadioPage> = (args) => (
    <AppShell {...args}>
        <RadioPage
            radio={{
                mediaSource: {
                    sourceUrl: 'http://s03.diazol.hu:7010/stream.mp3',
                    mediaType: 'audio/mpeg',
                },
                //  alternativePlayUrl: 'https://stream1.virtualisan.net/prx/4800/stream.mp3',
                // playUrl:
                //   'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/audio-store/chill-abstract-12099.mp3',
                preload: 'auto',
            }}
            playerElement={<SpeakerBackgroundPlayer embededImageSrc={embededImageSource} />}
            logo={<LogoSenseRadio dimensions={{ height: '8em' }} />}
            socialButtons={
                <SocialButtonGroup
                    dimensions={{ height: '3em' }}
                    facebookUrl="https://facebook.com"
                    instagramUrl="https://instagram.com"
                    youtubeUrl="https://youtube.com"
                    externalUrl="https://google.com"
                />
            }
            background={<StripedBackground backgroundEffectSrc={embededImageSource} />}
            pageFooter={
                <DefaultFooter
                    leftColumnElements={[
                        <LogoFreshPrint dimensions={{ height: '2.5em' }} />,
                        <LogoLedArt dimensions={{ height: '2.5em' }} />,
                    ]}
                    centerColumnElements={[
                        <SpanBlock rem={0.7} textContent={'Email: hello@radiosense.hu'} marginTop={'0.2rem'} center />,
                        <br />,

                        <SpanBlock
                            rem={0.5}
                            textContent={' © 2022 Radio Sense Hungary. All rights reserved.'}
                            marginTop={'0.1rem'}
                            center
                        />,
                        <SpanBlock rem={0.3} textContent={'created by nestmedia'} marginTop={'0.1rem'} center />,
                    ]}
                    rightColumnElements={[
                        <LogoGooglePlay
                            dimensions={{ height: '2em' }}
                            opacity={0}
                            linkUrl="https://play.google.com/store"
                        />,
                        <LogoAppStore
                            dimensions={{ height: '2em' }}
                            opacity={0}
                            linkUrl="https://www.apple.com/app-store/"
                        />,
                    ]}
                />
            }
        />
    </AppShell>
);

RadioPageStory.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/mTsfvR8TrmINWvBHHsycKb/Molitio-Design?node-id=19%3A36',
    },
    controls: { hideNoControlsWarning: true },
};
