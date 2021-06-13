import React from 'react';
import { Title1, Title2, Text } from '../themes/fonts';
import {WelcomeImg} from '../common/Welcome-Image';
import styled from 'styled-components';
import {Daytime} from '../common/DayTime';
import {Getname} from '../common/GetName';
import {NavBar} from '../common/Nav';
import { useQuery, gql } from '@apollo/client';


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

const GETTRAINING=gql`
query {
    allProgram(limit: 1) {
      _id 
        title
      workouts {
        _key
        day
        Workout {
          _id
          title
          calories
          duration
          categories
        }
      }
    }
  }
`;

// const GETWORKOUT=gql`
// query($id: ID!) {
//   Workout(id: $id) {
//     title
//   }
// }
// `;

export default function Dashboard() {
    const { loading, error, data} = useQuery(GETTRAINING);    
    console.log(data);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: </p>

    const program = data.allProgram[0];
    const {
        calories,
        categories,
        duration
    } = program.workouts[0].Workout;

    const categoryString = categories.join(", ");
    // const workout = data.Workout

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
            <Text>{program.workouts[0].Workout.title}</Text>
            <Text>{program.title}</Text>
            <Text small>{`${calories}kcal - ${duration}Min. - ${categoryString}`}</Text>
            <NavBar />
        </Wrapper>
    )
}

export {Dashboard};