export const headerHeight = '100px';

export const footerHeight = '30px';

export const maxWidthValue = '1600px';

export const NavHeaderHeight = '50px';

export interface Sizes {
  XXS: number | string; // Extra Extra Small
  XS: number | string; // Extra Small
  S: number | string; // Small
  M: number | string; // Medium
  L: number | string; // Large
  XL: number | string; // Extra Large
  XXL: number | string; // Extra Extra Large
}

export const gapSizes: Partial<Sizes> = {
  S: '10px',
  M: '20px',
  L: '30px',
  XL: '40px',
  XXL: '50px',
};

export const screenSizes: Partial<Sizes> = {
  XS: 480,
  S: 640,
  M: 800,
  L: 1024,
  XL: 1280,
  XXL: 1600,
};

export const fontSizes: Sizes = {
  XXS: '14px',
  XS: '16px',
  S: '18px',
  M: '24px',
  L: '32px',
  XL: '36px',
  XXL: '48px',
};

export const lineHeights: Sizes = {
  XXS: '14px',
  XS: '24px',
  S: '18px',
  M: '24px',
  L: '32px',
  XL: '36px',
  XXL: '48px',
};

export const textAreaSizes = {
  S: '92px',
  M: '108px',
  L: '128px',
};

// Define the interface for theme with states that can hold any string value in it.
interface ThemeWithStates {
  [propName: string]: string;
}

export interface Colors {
  white: string;
  black: string;
  skyBlue: string;
  lightWhite: string;
}

export const colors: Colors = {
  white: '#ffff',
  black: '#0000',
  skyBlue: 'rgb(109, 103, 208 , 0.5)',
  lightWhite: '#C2BFF4',
};

// Defined the interface named 'Theme'.
export interface Theme {
  [propName: string]:
    | string
    | ThemeWithStates
    | { [propName: string]: ThemeWithStates }
    | undefined;
  primary: string;
  textColor: string;
  cardBockGroundColor: string;
  cardText: string;
}

export const lightTheme: Theme = {
  primary: colors.white,
  textColor: colors.black,
  cardBockGroundColor: colors.skyBlue,
  cardText: colors.lightWhite,
};

export const darkTheme: Theme = {
  primary: colors.black,
  textColor: colors.white,
  cardBockGroundColor: colors.skyBlue,
  cardText: colors.lightWhite,
};

// Defined enum of themes with two different themes.
export enum Themes {
  LIGHT,
  DARK,
}

// Defined function 'getTheme' which takes one parameter of type Themes from the enum Themes and return either 'lightTheme' or 'darkTheme' or by default it returns 'lightTheme'.
export const getTheme = (theme: Themes) => {
  switch (theme) {
    case Themes.LIGHT:
      return lightTheme;
    case Themes.DARK:
      return darkTheme;
    default:
      return lightTheme;
  }
};
