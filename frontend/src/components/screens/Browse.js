import React from 'react';
import styled from 'styled-components';
import { Title2, Text } from '../themes/fonts';
import Tile from '../common/Tile';
import { NavBar } from '../common';
import { useQuery, gql } from '@apollo/client';


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

const GETPROGRAM=gql`
query {
    allProgram {
      _id 
        title
      slug {
          current
      }
    }
  }
`;

function Browse() {   
    const { loading, error, data} = useQuery(GETPROGRAM);    
    console.log(data);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: </p>

    const programs = data.allProgram;

    return (
        <Wrapper>
            <BrowseHeader>
                <Title2>Browse</Title2>
                <Text small>Filter</Text>
            </BrowseHeader>
            <ul>
                {programs.map(program => (
                    <Tile key={program._id} program={program}/>
                ))}
            </ul>
            
            <NavBar />
        </Wrapper>
    )
};

export default Browse;