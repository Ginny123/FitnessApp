import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { Title1, Title3, Text } from '../themes/fonts';
import Icon5 from '../../images/Schlank.svg';
import Icon6 from '../../images/Star.svg';
import Icon7 from '../../images/Kalender.svg';
import Icon8 from '../../images/Zurueck.svg';
import {Link} from 'react-router-dom';
import PieChart from '../common/PieChart';
import { useQuery, gql } from '@apollo/client';

const Wrapper = styled.div`
    
`;

const StickyButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;    
`;

const ProgramHeader = styled.div`
    height: 75vh;
    max-width:100%;
    background: ${(p) => p.theme.linearGradient.orangePink};
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Header = styled.div`
    width: 100%; 
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    position: absolute;
    top: 0;
    right: 0;
    padding-bottom: auto;
`;

const BackLink = styled(Link)``;

const IconBack = styled.img`
    margin: 2.5rem 2rem auto auto;
`;

const List = styled.ul`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-around;    
    list-style: none;
    position: absolute;
    bottom: 0;
    left: 0;
    padding-top: auto;
`;

const ListItem = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ListText = styled(Text)`
    font-size: 1rem;
    
`;

const Icon = styled.img`
    width: 2rem;
    height: 2rem;
    margin: 0 auto;    
`;

const Description = styled.div`
    width: 100%;
    max-height: 100%;
    background-color: ${(p) => p.theme.colors.beige};
    padding: 2rem 2.5rem;
`;

const Statistic = styled.div`
    width: 100%;
    max-height: 100%;
    padding: 3rem 2.5rem
`;


const Chart = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
`;

const GETPROGRAM = gql`
query($slug: String!) {
    allProgram(where: {slug: {current: {eq: $slug}}}) {
      _id 
        title
      duration
      difficulty
      description
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

const Program = ({match: {params}}) => {
    const { loading, error, data} = useQuery(GETPROGRAM, {variables: {slug: params.slug}});    
    console.log(data);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: </p>

    const program = data.allProgram[0];
    
    return (
        <Wrapper>            
            <ProgramHeader>
                <Header>
                    <BackLink to='/browse'>
                        <IconBack src={Icon8} alt='Icon Zurück' />
                    </BackLink>                    
                </Header>
                {/* <Title1>{props.title}</Title1> */}
                <Title1>{program.title}</Title1>
                <StickyButton>jetzt starten</StickyButton>
                <List>
                    <ListItem>
                        <Icon src={Icon5} alt='Icon Schlank' />
                        <ListText>ABNEHMEN</ListText>
                    </ListItem>
                    <ListItem>
                        <Icon src={Icon6} alt='Icon OneStar' />
                        <ListText>LEICHT</ListText>
                    </ListItem>
                    <ListItem>
                        <Icon src={Icon7} alt='Icon Kalender' />
                        <ListText>6 WOCHEN</ListText>
                    </ListItem>
                </List>
            </ProgramHeader>
            <Description>{program.description}</Description>
            <Statistic>
                <Title3>So ist das Programm aufgeteilt:</Title3>
                <Chart>                
                    <PieChart />
                    <Text>Legende</Text>
                </Chart>
            </Statistic>
            
            
        </Wrapper>
    )
};

export {Program};