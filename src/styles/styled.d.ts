import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      neutral: string;
      success: string;
      warning: string;
      error: string;
    };
    font: {
      family: string;
    };
  }
}