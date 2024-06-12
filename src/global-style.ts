import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
margin: 0; padding: 0; box-sizing: border-box;
}

@font-face {
  font-family: 'SegoeUIBold';
  src:  url('/assets/fonts/SegoeUIBold.eot') format('embedded-opentype'),
  url('/assets/fonts/SegoeUIBold.woff') format('woff'),
  url('/assets/fonts/SegoeUIBold.ttf') format('truetype');
}

@font-face {
  font-family: "SegoeUIRegular";
  src: url("../src/assets/fonts/SegoeUIRegular/SegoeUIRegular.eot") format("embedded-opentype"),
  url("../src/assets/fonts/SegoeUIRegular/SegoeUIRegular.woff") format("woff"),
  url("../src/assets/fonts/SegoeUIRegular/SegoeUIRegular.ttf") format("truetype");
}

`;
