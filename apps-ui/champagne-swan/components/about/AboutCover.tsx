import React from "react";
import { SystemContext } from "@molitio/ui-core";
import {
  StyledAboutCover,
  StyledAboutMainTitle,
  StyledAboutDescription,
  StyledAboutCoverButtonContainer,
  StyledAboutSubTitle,
  StyledAppCoverContactLink,
  StyledBoutCoverImage,
} from "./style";
import {
  StyledLinearGradient,
  StyledCoverContent,
  StyledWaterSplash,
  StyledButtonWaterSplashContainer,
} from "../common";
import { resolveThemeBreakPointValues, useLineBreakParser } from "../utils";

const AboutCover: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const navTree = systemContext?.navRoot ?? {};
  const aboutLeafs = systemContext?.contentRoot?.about?.leafs;
  const aboutCoverTextContent = aboutLeafs?.cover?.textContent;
  const aboutCoverAssetUrls = aboutLeafs?.cover?.assetUrls;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledAboutCover>
      <StyledBoutCoverImage
        src={aboutCoverAssetUrls?.cleaners ?? ""}
        alt={"cleaner-working"}
        fill={true}
        sizes={`(max-width: ${resolveThemeBreakPointValues(
          systemContext?.theme,
          "xl"
        )}) 50vw,
                33vw`}
      />
      <StyledLinearGradient
        direction="bottom"
        variation="reversePartial"
        positioning={{ position: "absolute", top: "0" }}
        visual={{ opacity: 0.5 }}
      />
      <StyledLinearGradient
        direction="bottom"
        variation="partial"
        positioning={{ position: "absolute", top: "0" }}
        visual={{ opacity: 1 }}
      />
      <StyledCoverContent>
        <StyledAboutMainTitle>
          {useLineBreakParser(aboutCoverTextContent?.title ?? "")}
        </StyledAboutMainTitle>
        <StyledAboutSubTitle>
          {useLineBreakParser(aboutCoverTextContent?.subTitle ?? "")}
        </StyledAboutSubTitle>
        <StyledAboutDescription>
          {useLineBreakParser(aboutCoverTextContent?.description ?? "")}
        </StyledAboutDescription>

        <StyledAboutCoverButtonContainer>
          <StyledButtonWaterSplashContainer>
            <StyledWaterSplash
              src={commonAssetUrls?.waterSplash ?? ""}
              alt={"water-splash"}
              fill={true}
              sizes={`(max-width: ${resolveThemeBreakPointValues(
                systemContext?.theme,
                "xl"
              )}) 50vw,
              33vw`}
            />
          </StyledButtonWaterSplashContainer>
          <StyledAppCoverContactLink
            key={navTree?.contact?.path ?? ""}
            href={navTree?.contact?.path ?? ""}
          >
            {aboutCoverTextContent?.contactLinkText ?? ""}
          </StyledAppCoverContactLink>
        </StyledAboutCoverButtonContainer>
      </StyledCoverContent>
    </StyledAboutCover>
  );
};

export default AboutCover;
