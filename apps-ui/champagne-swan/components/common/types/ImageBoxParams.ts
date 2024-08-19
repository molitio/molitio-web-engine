export type ImageBoxParams = {
  imageUrl: string;
   dimensions: {
    height?: string;
    width?: string;
    minHeight?: string;
    minWidth?: string;
    tablet?: {
      height?: string;
      width?: string;
      minHeight?: string;
      minWidth?: string;
    };
    mobile?: {
      height?: string;
      width?: string;
      minHeight?: string;
      minWidth?: string;
    };
    mobileSmall?:{
      height?: string;
      width?: string;
      minHeight?: string;
      minWidth?: string;
    }
  };
  positioning: {
    top?: string;
    margin?: string;
    tablet?: {
      top?: string;
      margin?: string;
    },
    mobile?:{
      top?: string;
      margin?: string;
    },
    mobileSmall?:{
      top?: string;
      margin?: string;
    }
  };
  breakpoints: {
    breakpoint1?: string;
    breakpoint2?: string;
    breakpoint3?: string;
  };
};
