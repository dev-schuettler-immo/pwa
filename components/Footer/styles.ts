import link from 'next/link';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.footer``;

export const BottomContainer = styled.div`
    padding: 40px 24px;
    display: flex;
    flex-direction: column;
    ${up('xl')} {
        flex-direction: inherit;
        width: ${({ theme }) => theme.maxWidth}px;
        margin: 0 auto;
        justify-content: space-between;
        align-items: flex-end;
    }
`;

export const CopyrightContainer = styled.div`
    order: 2;
    width: 100%;
    ${up('xl')} {
        order: 1;
        width: auto;
    }
`;

export const Copyright = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

export const Navigation = styled.div`
    order: 1;
    width: 100%;
    margin-bottom: 40px;
    ${up('xl')} {
        order: 2;
        width: auto;
        margin-bottom: 0;
        display: flex;
    }
`;

export const NavigationItem = styled(link)``;

export const NavigationValue = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    text-transform: uppercase;
    margin-bottom: 10px;
    ${up('xl')} {
        margin-left: 40px;
    }
    &:first-child {
        margin-left: 0;
    }
`;

export const Logo = styled.img`
    display: none;
    ${up('xl')} {
        display: block;
        margin-bottom: 40px;
    }
`;
