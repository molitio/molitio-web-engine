import {
  AppShell,
  ThemeNameTags,
  RadioPage,
  StripedBackground,
  DefaultFooter,
  SpanBlock,
  /* LogoFreshPrintSvg,
  SpeakerBackgroundPlayerSvg,
  LogoSenseRadioSvg,
  SocialButtonsSvg,
  LogoLedArtSvg,
  LogoNestMediaSvg,
  LogoGooglePlaySvg,
  LogoAppStoreSvg, */
} from "@molitio/ui-core";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <AppShell applyGlobalStyleRules>
      <h1>sonic boom</h1>
      {/*   <RadioPage
        radio={{
          playUrl:
            "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/audio-store/chill-abstract-12099.mp3",
        }}
        playerElement={<SpeakerBackgroundPlayerSvg />}
        logo={<LogoSenseRadioSvg />}
        socialButtons={
          <SocialButtonsSvg
            dimensions={{ height: "22pt" }}
            facebookUrl="https://facebook.com"
            instagramUrl="https://instagram.com"
            youtubeUrl="https://youtube.com"
            externalUrl="https://google.com"
          />
        }
        background={<StripedBackground />}
        externalBackgroundEffect="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/image-store/radio_sense_effect.webp"
        pageFooter={
          <DefaultFooter
            leftColumnElements={[
              <LogoFreshPrintSvg dimensions={{ height: "8vh" }} />,
              <LogoLedArtSvg dimensions={{ height: "6vh" }} />,
              <LogoNestMediaSvg dimensions={{ height: "8vh" }} />,
            ]}
            centerColumnElements={[
              <SpanBlock
                rem={0.7}
                color={"secondary"}
                marginTop={"0.2rem"}
                center
              >
                Tel/Viber: +36 30 277 3939
                <br />
                Email: hello@radiosense.hu
              </SpanBlock>,
              <SpanBlock
                rem={0.5}
                color={"secondary"}
                marginTop={"0.1rem"}
                center
              >
                © 2022 Radio Sense Hungary. All rights reserved.
                <br />
                created by nestmedia
              </SpanBlock>,
            ]}
            rightColumnElements={[
              <LogoGooglePlaySvg
                dimensions={{ height: "6vh" }}
                opacity={0.8}
                linkUrl="https://play.google.com/store"
              />,
              <LogoAppStoreSvg
                dimensions={{ height: "6vh" }}
                opacity={0.8}
                linkUrl="https://www.apple.com/app-store/"
              />,
            ]}
          />
        }
      /> */}
    </AppShell>
  );
};

export default Home;
