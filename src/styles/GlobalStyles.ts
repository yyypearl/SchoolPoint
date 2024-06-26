import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`    
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  width: 100%;
  height: 100%;
  max-width: 480px;
  min-height: 100%;
  margin: 0 auto;
}

body {
  width: 100%;
  height: 100%;
  font-family: "Pretendard";
  border-left: 1px solid rgb(232, 232, 232);
  border-right: 1px solid rgb(232, 232, 232);
  white-space: pre-line;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

a {
  color: inherit;
  text-decoration: none;
}

::-webkit-scrollbar {
  display: none;
}


@font-face {
    font-family: "Pretendard";
    src: url("/public/assets/fonts/PretendardVariable.woff2") format('font-woff2'); 
  }
`;

export default GlobalStyles;