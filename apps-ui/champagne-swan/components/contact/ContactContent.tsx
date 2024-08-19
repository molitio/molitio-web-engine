import React from "react";
import { SystemContext } from "@molitio/ui-core";
import {
  FormContainer,
  ContactInfoContainer,
  StyledContactInfo,
  StyledContactContent,
  StyledFlexGroup,
  StyledContactContentLogoImage,
  StyledContactContentLogoContainer,
} from "./style";
import { StyledLinearGradient, ContactForm, StyledAnchor } from "../common";
import { resolveThemeBreakPointValues } from "../utils";

const ContactContent: React.FC = () => {
  const systemContext = React.useContext(SystemContext);

  const contactLeafs = systemContext?.contentRoot?.contact?.leafs;
  const commonLeafs = systemContext?.contentRoot?.common?.leafs;
  const iconDefinitions = contactLeafs?.contactInfo?.iconDefinitions;
  const textContent = contactLeafs?.contactInfo?.textContent;
  const commonAssetUrls = commonLeafs?.images?.assetUrls;

  return (
    <StyledContactContent>
      <StyledLinearGradient
        direction="bottom"
        variation="appCoverBottom"
        positioning={{ position: "absolute", top: "0px" }}
        visual={{ opacity: 1 }}
      />
      <StyledLinearGradient
        direction="top"
        variation="appCoverTop"
        positioning={{ position: "absolute", top: "0px" }}
        visual={{ opacity: 1 }}
      />
      <StyledFlexGroup>
        <ContactInfoContainer>
          <StyledContactInfo>
            <StyledAnchor href={iconDefinitions?.phone?.hrefUrl ?? ""}>
              {iconDefinitions?.phone?.title ?? ""}
              <br />
              {textContent?.phoneMain ?? ""}
            </StyledAnchor>
          </StyledContactInfo>
          <StyledContactInfo>
            <StyledAnchor href={iconDefinitions?.email?.hrefUrl ?? ""}>
              {iconDefinitions?.email?.title ?? ""}
              <br />
              {textContent?.email ?? ""}
            </StyledAnchor>
          </StyledContactInfo>
          <StyledContactInfo>
            <StyledAnchor href={iconDefinitions?.address?.hrefUrl ?? ""}>
              {iconDefinitions?.address?.title ?? ""}
              <br />
              {textContent?.address1 ?? ""}
              <br />
              {textContent?.address2 ?? ""}
            </StyledAnchor>
          </StyledContactInfo>
        </ContactInfoContainer>
        <FormContainer>
          <ContactForm />
        </FormContainer>
      </StyledFlexGroup>
      <StyledContactContentLogoContainer>
        <StyledContactContentLogoImage
          src={commonAssetUrls?.logo ?? ""}
          alt={"logo"}
          fill={true}
          sizes={`(max-width: ${resolveThemeBreakPointValues(
            systemContext?.theme,
            "xl"
          )}) 50vw,
                33vw`}
        />
      </StyledContactContentLogoContainer>
    </StyledContactContent>
  );
};

export default ContactContent;
