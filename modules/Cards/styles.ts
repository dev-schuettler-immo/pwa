import NextImage from 'next/image';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
    padding: 80px 24px;
    text-align: center;
`;

export const Headline = styled.div`
    font-size: 36px;
    line-height: 44px;
    font-weight: 600;
    margin-bottom: 14px;
`;

export const Subheadline = styled.div`
    font-size: 24px;
    line-height: 38px;
    color: ${({ theme }) => theme.colors.opacityGrey};
`;

export const Cards = styled.div`
    margin-top: 40px;
`;

export const Card = styled.div`
    width: 100%;
    position: relative;
    text-align: left;
    margin-bottom: 40px;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const Content = styled.div`
    margin-top: 32px;
    font-size: 20px;
    line-heigght: 32px;
`;

export const CardHeadline = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 32px 24px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 22px;
    line-height: 30px;
    z-index: 10;
`;

export const Text = styled.div``;

export const ImageContainer = styled.div`
    vertical-align: bottom;
    line-height: 0;
    width: 100%;
    border-radius: 28px;
    overflow: hidden;
    position: relative;

    &:after {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.35) 100%);
        z-index: 9;
    }
`;

export const ImageNext = styled(NextImage)``;
