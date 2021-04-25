import styled from 'styled-components';

const StyledButton = styled.button`
    color:white;
    background: #1D2A73;
    border-radius: 50px;
    width: 25%;  
    border: none;  
`;

const Button = ({children}) => {
    return <StyledButton>{children}</StyledButton>;
};

export {Button};