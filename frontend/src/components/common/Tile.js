import React from "react";
import styled from "styled-components";
import Icon4 from "../../images/Heart.svg";
import { Link } from "react-router-dom";
import {Text, Title2} from '../themes/fonts';

const Container = styled.div`
  padding: 2rem;
  width: 37.5rem;
  height: 21.5rem;
  border-radius: 0.5rem;
  background-color: ${(p) => p.theme.colors.beige};
  margin-bottom: 2rem; 
`;

const TileLink = styled(Link)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 15%;
  list-style: none;
  text-decoration: none;
`;

const Icon = styled.img`
  text-align: left;
`;


const TileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;



const Tile = (props) => {
  return (
    <Container>
      <TileHeader>
      <Icon src={Icon4} alt="Icon Heart" />
        <Text small>Neu</Text>
      </TileHeader>

      <TileLink>
        <Link to="/program">
          <Title2>{props.title}</Title2>
        </Link>
      </TileLink>
    </Container>
  );
};

export {Tile};