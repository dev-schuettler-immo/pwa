import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import NextImage from 'next/image';

export const Container = styled.div`
    padding: 80px 24px;

    ${up('md')} {
        display: flex;
        width: ${({ theme }) => theme.maxWidth}px;
        margin: 0 auto;
        padding-left: 0;
        padding-right: 0;
    }
`;

export const Content = styled.div`
    ${up('xl')} {
        flex: 3;
    }
`;

export const ImageContainer = styled.div`
    display: none;

    ${up('xl')} {
        display: block;
        flex: 1;
        position: relative;
        margin-right: 46px;
        border-radius: 28px;
        overflow: hidden;
    }
`;

export const Image = styled(NextImage)`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export const Headline = styled.div`
    font-size: 36px;
    font-weight: 600;
    line-height: 43px;
    margin-bottom: 14px;
    word-break: break-word;
`;

export const Subheadline = styled.div`
    font-size: 24px;
    line-height: 38px;
    color: ${({ theme }) => theme.colors.opacityGrey};
    margin-bottom: 40px;
`;

export const Text = styled.div`
    p {
        font-size: 20px;
        line-height: 32px;
        margin-bottom: 20px;
    }
`;
