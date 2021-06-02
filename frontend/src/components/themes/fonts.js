import styled, {css} from 'styled-components';

// const Fontsize = styled.root`
//     font-size: 20%;
//     background: #eee;
// `;

const Title1 = styled.h1`
        font-weight: 700;
        font-size: 3.6rem;
        line-height: 1.2;
        font-style: normal;
    `;

const Title2 = styled.h2`
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 1.2;
        font-style: normal;
    `;

const Title3 = styled.h3`
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 1.2;
        font-style: normal;
    `;

const Text = styled.p`
        font-weight: 400;
        ${p => p.small ? css`
        font-size: 1.2rem;
        line-height: 1.25;
        `: css`
        font-size: 1.6rem;
        line-height: 1.3;
        `}
        font-style: normal;
    `;

export {Title1};
export {Title2};
export {Title3};
export {Text};