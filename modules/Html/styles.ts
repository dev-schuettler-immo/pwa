import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
    p,
    li {
        font-size: 20px;
        line-height: 32px;
    }
    ul {
        list-style-position: inside;
    }
    p,
    ul {
        margin-bottom: 20px;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-bottom: 40px;
    }
`;
