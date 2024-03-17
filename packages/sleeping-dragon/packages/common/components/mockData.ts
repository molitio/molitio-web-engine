export const mockData = {
  appName: "Sleeping Dragon v0.2.0",
  navRoot: {
    home: {
      label: "Home",
      path: "/",
    },
    gallery: { label: "GALÉRIA", path: "#gallery" },
    services: { label: "SZOLGÁLTATÁSOK", path: "#services" },
    about: { label: "RÓLUNK", path: "#about" },
    contact: { label: "KAPCSOLAT", path: "#contact" },
  },
  contentRoot: {
    home: {
      leafs: {
        hero: {
          textContent: {
            title: "WEBRE TERVEZVE",
            description:
              "Cégünk egyedi tervezésű weboldalak kivitelezésével foglalkozik, melyek felépítése szorosan igazodik ügyfeleink termékeihez és arculatához. Célunk, hogy minden általunk készített oldal látogatójának élmény legyen a böngészés, vásárlás vagy információ gyűjtés, valamint, hogy megrendelőinket a leghatékonyabb módon kössük össze a célcsoportjukkal.",
          },
          iconDefinitions: {
            email: {
              title: "Envelop",
              url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/ui-molitio-com/web-content/logo/molitio_icons-envelop.svg",
            },
            github: {
              title: "Github",
              url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/ui-molitio-com/web-content/logo/molitio_icons-github.svg",
            },
            mobile: {
              title: "Mobile",
              url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/ui-molitio-com/web-content/logo/molitio_icons-mobile.svg",
            },
            whatsapp: {
              title: "Whatsapp",
              url: "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/ui-molitio-com/web-content/logo/molitio_icons-whatsapp.svg",
            },
          },
          assetUrls: {
            heroBackground:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/ui-molitio-com/web-content/media/Earth.mp4",
            effectLayer:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/ui-molitio-com/web-content/img/gray_layer-01.svg",
          },
        },
      },
    },
    nav: {
      leafs: {
        contacts: {
          textContent: {
            email: "web-dev@molitio.com",
            phoneMain: "+36 30 617 8708",
            phoneSecondary: "+36 30 280 8202",
          },
          assetUrls: {
            gitHub: "https://github.com/molitio",
          },
        },
        logo: {
          assetUrls: {
            logoImage:
              "https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/ui-molitio-com/web-content/logo/molitio_code_logo-01.png",
          },
        },
      },
    },
    footer: {
      leafs: {
        maintainer: {
          textContent: {
            maintainer: `© 2022 All Rights Reserved | molitio llc. - ${"sleeping dragon app story"}`,
          },
        },
      },
    },
  },
};
