import React from 'react';
import { Title1, Title2, Text } from '../themes/fonts';
import {WelcomeImg} from '../common/Welcome-Image';
import styled from 'styled-components';
import {Daytime} from '../common/DayTime';
import {Getname} from '../common/GetName';

const Wrapper = styled.div`
    margin: 10% 5% 22%;     
    max-height:100%;
    max-width: 100%;
`;

const Welcome = styled.div`
    padding-bottom: 7%;
`;

const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export default function Dashboard() {
    return (
        <Wrapper>
            <Welcome>
                <Title1>Guten</Title1>
                <Daytime />
                <Getname name='Brigitte'/>
            </Welcome>            
            <InnerWrapper>
                <Title2>Dein Workout heute</Title2>
                <Text small>Trainingsplan</Text>
            </InnerWrapper>
            <WelcomeImg />
            <Text>Titel des Workouts</Text>
            <Text>Titel des Programms</Text>
            <Text small>xxx kcal - 26Min. - Beweglichkeit</Text>
        </Wrapper>
    )
}

export {Dashboard};