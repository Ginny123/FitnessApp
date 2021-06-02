import styled from 'styled-components';

const StyledButton = styled.button`
    color:white;
    background: ${(p) =>p.theme.colors.darkBlue};
    border-radius: 50px;
    width: 25%;  
    border: none;  
    padding: 1rem;
`;

// const Button = ({children}) => {
//     return <StyledButton>{children}</StyledButton>;
// };

// export {Button};
export default StyledButton;