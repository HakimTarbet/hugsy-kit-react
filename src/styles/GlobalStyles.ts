import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Importing Open Sans Font from Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

  /* Primary Color Scale */
  :root {
    --primary-5: #E6E9ED;
    --primary-10: #CCD4DB;
    --primary-20: #99A9B7;
    --primary-30: #668092;
    --primary-40: #33576E;
    --primary-50: #002655; /* Main Primary Color */
    --primary-60: #00234D;
    --primary-70: #001E45;
    --primary-80: #00193C;
    --primary-90: #001432;

    /* Secondary Color Scale */
    --secondary-5: #E6E6E6;
    --secondary-10: #CCCCCC;
    --secondary-20: #999999;
    --secondary-30: #666666;
    --secondary-40: #4D4D4D;
    --secondary-50: #343434; /* Main Secondary Color */
    --secondary-60: #2E2E2E;
    --secondary-70: #292929;
    --secondary-80: #232323;
    --secondary-90: #1D1D1D;

    /* Neutral Color Scale */
    --neutral-5: #F0F1F0;
    --neutral-10: #E1E2E2;
    --neutral-20: #C3C5C4;
    --neutral-30: #A5A8A6;
    --neutral-40: #878B89;
    --neutral-50: #8E918F; /* Main Neutral Color */
    --neutral-60: #6F726F;
    --neutral-70: #606360;
    --neutral-80: #505450;
    --neutral-90: #404340;

    /* Additional Colors */
    --back: #343434;
    --success: #198754;
    --warning: #F6C833;
    --error: #E82727;

    /* Font Family */
    --font-family: 'Open Sans', serif;
  }

  body {
    background-color: var(--neutral-5); /* Adjust as needed */
    color: var(--secondary-50); /* Default text color */
    font-family: var(--font-family); /* Applying Open Sans globally */
  }
`;

export default GlobalStyles;