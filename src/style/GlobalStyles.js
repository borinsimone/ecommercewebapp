import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
    --primary-text : "Fira Sans", sans-serif;
    --secondary-text :  "PT Serif", serif;
}
body{
    overflow-x: hidden;
    &::-webkit-scrollbar {
    width: 6px;
}

&::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    width: 6px;
}

&::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    border-radius: 100px;
    width: 6px;
}
}
*{
    
    margin:0;
    padding: 0;
    font-size: 18px ;
    box-sizing: border-box;
    user-select: none;
    @media (min-width:700px) {
        font-size: 20px;
        
    }
}

`;
