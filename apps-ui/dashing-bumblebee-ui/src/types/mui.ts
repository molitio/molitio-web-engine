export type Visual = {
  boxShadow?: string;
  textShadow?: string;
  borderRadius?: string;
  opacity?: number;
  overflow?: string;
};

declare module "@mui/material/styles/createPalette" {
  export interface Palette {
    tertiary: PaletteColor;
    interactiveSecondary: PaletteColor;
    stars?: {
      [key: string]: string;
    };
    gradient?: {
      [key: string]: string;
    };
    visual?: Record<string, Visual>;
  }
}

declare module "@mui/material" {
  export interface TypeBackground {
    background: {
      secondary: string;
      [key: string]: string;
    };
  }

  export interface TypeText {
    [key: string]: string;
  }

  export interface Theme {
    background: {
      [key: string]: string;
    };

    dimensions: {
      page: {
        height: string;
      };
      header: {
        height: string;
      };
      footer: {
        height: string;
      };
    };
  }
}
