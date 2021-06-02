import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import Icon1 from '../../images/Home.svg';
import Icon2 from '../../images/Barbel.svg';
import Icon3 from '../../images/Profile.svg';
import {Text} from '../themes/fonts';


const Icon = styled.img`
    margin: auto;
    display: flex;
    align-items: center;
`;

const Wrapper = styled.ul`
    width:100%;
    height: 5rem;
    background-color: ${(p) => p.theme.colors.beige};
    display: flex;
    justify-content: space-around;
    align-items: center;  
    align-self: flex-end;
    position: fixed; 
    bottom: 0;
    left: 0;   
`;

const NavbarLink = styled(NavLink)`    
    list-style: none;
    text-decoration:none;
    font-size: 1rem;
`;

const NavText = styled(Text)`
    font-size: 1rem;
`;

const NavBar = () => {
    return (
        <Wrapper>               
            <NavbarLink to='/home'>
                <Icon src={Icon1} alt="Icon Home" />
                <NavText small>HOME</NavText>
            </NavbarLink>            
            <NavbarLink to='/browse'>
                <Icon src={Icon2} alt="Icon Barbel" />
                <NavText small>BROWSE</NavText>
            </NavbarLink>            
            <NavbarLink to='/profil'>
                <Icon src={Icon3} alt="Icon Profile" />
                <NavText small>PROFIL</NavText>
            </NavbarLink>            
        </Wrapper>
    )
};

export {NavBar};