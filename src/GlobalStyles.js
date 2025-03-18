import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  .merge-btn {
    color: white;
    padding: 6px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    width: 100%;
    background-color: transparent;
    &:hover {
      background-color: var(--button-hover-color);
    }
  }

  #thumbnailView {
    width: 100%;
  }
  .d-none { 
    display: none;
  }
`;

export default GlobalStyle;
