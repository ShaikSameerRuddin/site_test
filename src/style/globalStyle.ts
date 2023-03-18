import { createGlobalStyle } from 'styled-components';
import { fontSizes, gapSizes, screenSizes } from './theme';

import { rgba } from 'polished';

export const GlobalStyle = createGlobalStyle`
  /* :root{
    transition: margin 300ms ease-in-out;
    --pageMargin: 80px;
    @media (max-width: ${screenSizes.L}px) {
      --pageMargin: 40px;
    }
    @media (max-width: ${screenSizes.M}px) {
      --pageMargin: 20px;
    }
  } */

  h1,h2,h3,h4{
    margin: 0;
  }
 
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
 
  }
  html,
  body {
    font-size: 16px;
    height: 100%;
    scroll-behavior: smooth;
    width: 100%;
  }
  body {
    min-height: 100%;
    margin: 0;
    padding: 0;
   
    font-family: 'DMSansRegular';
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
   
  }
  *::-webkit-scrollbar {
    width: 12px;
    background-color: ${rgba(81, 111, 119, 0.101961)};
    border-radius: 4px;
  }
  *::-webkit-scrollbar-thumb {
    border: 2px solid transparent;
    background-color: #9CA6AD;
    border-radius: 20px;
    background-clip: content-box;
  }
  ::-webkit-input-placeholder {
color: rgba(0, 0, 0, .7);
}
  #root{
    display: flex;
    flex-flow: column;
    min-height: 100vh;
    max-width: 100%;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-family: "DMSansRegular";
  }
  a{
    font-family: 'DMSansRegular';
    text-decoration: none;
    
    
  }
  label {
    font-size: ${fontSizes.XS};
    position: relative;
    
  }
 
  
  
  button {
    font-size: 16px;
    margin: 0;
    padding: 8px 12px;
  }
  hr {
 
    border: 0;
  }

  a.disabled {
    pointer-events: none;
  }
  svg{
    overflow: visible;
    + span {
      margin-left: ${gapSizes.S};
    }
  }




`;
