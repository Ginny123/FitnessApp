import React from 'react';
import styled from 'styled-components';
import image from '../../images/Welcome.svg';

const Image =styled.img`
    width: 100%;
    height:100%;
    padding: 10px 0;
`;
const WelcomeImg = (p) => {
    return (
        <Image src={image} alt={p.alt} />
    );
};

export {WelcomeImg};