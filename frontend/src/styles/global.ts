import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    --section-active: #323232;
    --section-inactive: #202020;
    --section-hover: #262626;

    --table-header-color: #2E2C2C;
    --table-header-border-color: #525252;

    --table-row-even: #242424;
    --table-row-odd: #2E2D2D;

    --info-container-background: #272727;

    --info-odd-background: #393939;
    --info-even-background: #464545;

    --info-name-border-color: #2B2B2B;

    --text: #FFF;
    --background: #181818;


  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    color: var(--text);
    font: 400 16px Roboto, sans-serif;
    width: 100vw;
  }

  a{
    text-decoration: none;
    color: var(--text);
  }
`
