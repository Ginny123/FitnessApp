import React from 'react';
import styled from 'styled-components';
import { Title2, Text } from '../themes/fonts';
import {Tile} from '../common/Tile';
import { NavBar } from '../common';


const Wrapper = styled.div`
    margin: 10% 5% 22%;     
    max-height:100%;
    max-width: 100%;    
`;

const BrowseHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 10rem;
    max-width: 100%;

`;

function Browse() {
    return (
        <Wrapper>
            <BrowseHeader>
                <Title2>Browse</Title2>
                <Text small>Filter</Text>
            </BrowseHeader>
            <Tile title='Core-Challenge' />
            <Tile title='Full Body Workout'/>
            <Tile title='Cardio-Training' />
            <NavBar />
        </Wrapper>
    )
};

export {Browse};