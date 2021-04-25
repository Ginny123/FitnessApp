import React from 'react';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0; //verhindert ungewünschte Ränder
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        background-color: #ffffff;
        width: 414px;
        color: #1D2A73;
    }`

export {GlobalStyle};
