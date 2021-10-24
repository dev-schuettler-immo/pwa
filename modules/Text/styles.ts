import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import NextImage from 'next/image';

export const Container = styled.div`
    padding: 80px 24px;
`;

export const Content = styled.div``;

export const ImageContainer = styled.div`
    display: none;
`;

export const Image = styled(NextImage)``;

export const Headline = styled.div`
    font-size: 36px;
    font-weight: 600;
    line-height: 43px;
    margin-bottom: 14px;
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
