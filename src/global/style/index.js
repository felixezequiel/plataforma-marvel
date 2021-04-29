import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Marvel-Regular';
    src: url('/fontes/MarvelRegular-Dj83.ttf');
  }
  @font-face {
    font-family: 'Axiform-Regular';
    src: url('/fontes/Kastelov - Axiforma Regular.otf');
  }
  * {
    font-family: 'Marvel-Regular', 'Axiform-Regular';
  }
`