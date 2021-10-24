import styled from 'styled-components';
import NextImage from 'next/image';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
    padding-top: 80px;
    padding-bottom: 80px;

    ${up('xl')} {
        width: ${({ theme }) => theme.maxWidth}px;
        margin: 0 auto;
    }
`;

export const Content = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 24px;
    z-index: 10;
    color: ${({ theme }) => theme.colors.white};

    ${up('xl')} {
        padding: 80px;
    }
`;

export const Headline = styled.div`
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;

    ${up('xl')} {
        font-size: 48px;
        line-height: 58px;
    }
`;

export const Subheadline = styled.div`
    font-size: 24px;
    line-height: 28px;
    margin-top: 12px;

    ${up('xl')} {
        margin-top: 24px;
        font-size: 32px;
        line-height: 42px;
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    position: relative;

    &:after {
        content: ' ';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.35) 100%);
        position: absolute;
        border-radius: 28px;
    }
`;

export const Image = styled(NextImage)``;
