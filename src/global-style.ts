import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
margin: 0; padding: 0; box-sizing: border-box;
}

@font-face {
  font-family: 'SegoeUIBold';
  src:  url('../public/fonts/SegoeUIBold/SegoeUIBold.eot') format('embedded-opentype'),
  url('../public/fonts/SegoeUIBold/SegoeUIBold.woff') format('woff'),
  url('../public/fonts/SegoeUIBold/SegoeUIBold.ttf') format('truetype');
}

@font-face {
  font-family: "SegoeUIRegular";
  src: url('../public/fonts/SegoeUIRegular/SegoeUIRegular.eot') format('embedded-opentype'),
  url('../public/fonts/SegoeUIRegular/SegoeUIRegular.woff') format('woff'),
  url('../public/fonts/SegoeUIRegular/SegoeUIRegular.ttf') format('truetype');
}

`;
