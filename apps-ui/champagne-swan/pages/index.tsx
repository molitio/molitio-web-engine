import React from "react";
import type { NextPage } from "next";
import { AppCover } from "../components/common";
import { Partners } from "../components/partners";
import { Opinions } from "../components/opinions";
import { ServicesLanding } from "../components/services";
import { BrandMessage, BrandFeats } from "../components/brand";
import { ContactInfo } from "../components/contact";

const IndexPage: NextPage = () => {
  return (
    <main>
      <AppCover />
      <BrandFeats />
      <BrandMessage />
      <ServicesLanding />
      <Opinions />
      <Partners />
      <ContactInfo />
    </main>
  );
};

export default IndexPage;
