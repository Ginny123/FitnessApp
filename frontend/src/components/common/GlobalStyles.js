import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0; //verhindert ungewünschte Ränder
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-size: 62.5%;
        background-color: #ffffff;        
        color: #1D2A73;
    }`

export {GlobalStyle};
