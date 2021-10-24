import styled from 'styled-components';
import NextImage from 'next/image';
import { up } from 'styled-breakpoints';

export const Container = styled.div``;

export const Content = styled.div`
    ${up('xl')} {
    }
`;

export const Headline = styled.div``;

export const Subheadline = styled.div``;

export const ImageContainer = styled.div``;

export const Image = styled(NextImage)``;
