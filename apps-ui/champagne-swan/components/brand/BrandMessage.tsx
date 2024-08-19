import React from "react";
import { SystemContext } from "@molitio/ui-core";
import { IconGroup, StyledBrandMessageInfoWaterSplash } from "../common";
import {
  StyledBrandMessage,
  StyledBrandMessagePanelTitle,
  StyledBrandMessagePanelText,
  StyledBrandMessagePanelContactLink,
  StyledBrandMessageIcons,
  StyledBrandMessagePanelContent,
  StyledBrandMessagePanel,
  StyledBrandMessageMainTitle,
  StyledBrandMessagePanelImage,
  StyledBrandMessageOfficeCleanerImage,
  StyledBrandMessageImageAndEffect,
} from "./style";
import { resolveThemeBreakPointValues } from "../utils";

const BrandMessage: React.FC = () => {
  const systemContext = React.useContext(SystemContext);

  const navTree = systemContext.navRoot ?? {};

  const brandMessageLeafs = systemContext?.contentRoot?.brandMessage?.leafs;
  const textContent = brandMessageLeafs?.cover?.textContent;
  const assetUrls = brandMessageLeafs?.cover?.assetUrls;

  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledBrandMessage>
      <StyledBrandMessageIcons>
        <IconGroup
          fill={systemContext?.theme?.palette?.stars?.gold ?? ""}
          starCount={5}
        />
      </StyledBrandMessageIcons>

      <StyledBrandMessageMainTitle>
        {textContent?.title ?? ""}
      </StyledBrandMessageMainTitle>

      <StyledBrandMessagePanel>
        <StyledBrandMessagePanelImage>
          <StyledBrandMessageImageAndEffect>
            <StyledBrandMessageInfoWaterSplash
              src={commonAssetUrls?.waterSplash ?? ""}
              alt={"water-splash"}
              width={160}
              height={160}
            />
            <StyledBrandMessageOfficeCleanerImage
              id={"office-cleaners"}
              sizes={`(max-width: ${resolveThemeBreakPointValues(
                systemContext?.theme,
                "xl"
              )}) 50vw,
                33vw`}
              src={assetUrls?.officeCleaners ?? ""}
              alt={"office-cleaners"}
              fill={true}
            />
          </StyledBrandMessageImageAndEffect>
        </StyledBrandMessagePanelImage>
        <StyledBrandMessagePanelContent>
          <StyledBrandMessagePanelTitle>
            {textContent?.contentTitle ?? ""}
          </StyledBrandMessagePanelTitle>

          <StyledBrandMessagePanelText>
            {textContent?.contentText ?? ""}
          </StyledBrandMessagePanelText>

          <StyledBrandMessagePanelContactLink
            key={navTree?.about?.path ?? ""}
            href={navTree?.about?.path ?? ""}
          >
            {textContent?.moreInfoButton ?? ""}
          </StyledBrandMessagePanelContactLink>
        </StyledBrandMessagePanelContent>
      </StyledBrandMessagePanel>
    </StyledBrandMessage>
  );
};

export default BrandMessage;
