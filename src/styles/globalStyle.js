import { createGlobalStyle } from 'styled-components';
import Basics from './basics';
import Screen from './screen';
import * as Fonts from './fonts';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Monoton';
    src: url(${Fonts.MonotonRegularTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Noto Sans';
    src: url(${Fonts.NotoSansBoldTTF}) format ('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Noto Sans';
    src: url(${Fonts.NotoSansBoldItalicTFF}) format ('truetype');
    font-weight: 900;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'Noto Sans';
    src: url(${Fonts.NotoSansItalicTTF}) format ('truetype');
    font-weight: 300;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'Noto Sans';
    src: url(${Fonts.NotoSansRegularTTF}) format ('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Lilita One';
    src: url(${Fonts.LilitaOneRegularTTF}) format ('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Baloo Bhaina';
    src: url(${Fonts.BalooBhainaRegullarTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'PeaceSans';
    src: url(${Fonts.PeaceSans}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #ffffff;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  a {
    // color: ${Basics.colors.deepRed};
    text-decoration: none !important;
    // text-decoration-skip-ink: auto;
    // position: relative;
    transition: ${Basics.transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${Basics.colors.bloodRed};
      outline: 0;
    }
  }

  // p {
  //   font-size: 13px;
  //   font-family: ${Basics.fonts.PeaceSans};
  //   color: ${Basics.colors.bloodRed};
  //   font-weight: 400;
  //   word-spacing: 2px;

  // }

  ol {
    counter-reset: item;
    list-style-type: none;
    margin-left: -2.5em;
  }
  li {
    display: block;
    font-size: 28px;
    font-family: ${Basics.fonts.BalooBhaina};
    color: ${Basics.colors.bloodRed};
    font-weight: 500;
    word-spacing: 2px;

    ${Screen.tablet`
      font-size: 22px;
    `};
  }

  li:before {
    content: counter(item, decimal-leading-zero) ". ";
    counter-increment: item;
    color: ${Basics.colors.deepRed};
    font-weight: 400;
  }
`;

export default GlobalStyle;
