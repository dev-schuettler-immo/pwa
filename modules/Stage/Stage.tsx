import * as Styled from './styles';

const Stage = (props: any) => {
    return (
        <Styled.Container>
            <Styled.Content>
                <Styled.Headline>{props?.moduleStage?.headline}</Styled.Headline>
                <Styled.Subheadline>{props?.moduleStage?.subheadline}</Styled.Subheadline>
            </Styled.Content>

            <Styled.ImageContainer>
                <Styled.Image
                    src={props?.moduleStage?.image?.url}
                    width={props?.moduleStage?.image?.width}
                    height={props?.moduleStage?.image?.height}
                />
            </Styled.ImageContainer>
        </Styled.Container>
    );
};

export default Stage;
