import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
    --primary-text : "Fira Sans", sans-serif;
    --secondary-text :  "PT Serif", serif;
}
body{
    overflow-x: hidden;
}
*{
    
    margin:0;
    padding: 0;
    font-size: 16px ;
    box-sizing: border-box;
    @media (min-width:700px) {
        font-size: 24px;
        
    }
}

`;
