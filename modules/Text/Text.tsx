import * as Styled from './styles';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type Props = {
    moduleText: {
        title: string;
        text: any;
    };
};

const Text = ({ moduleText }: any) => {
    if (!moduleText?.text?.json) {
        return null;
    }

    return (
        <Styled.Container>
            {moduleText?.image?.url && (
                <Styled.ImageContainer>
                    <Styled.Image src={moduleText?.image?.url} layout='fill' />
                </Styled.ImageContainer>
            )}

            <Styled.Content>
                <Styled.Headline>{moduleText?.headline}</Styled.Headline>
                <Styled.Subheadline>{moduleText?.subheadline}</Styled.Subheadline>
                <Styled.Text>{documentToReactComponents(moduleText?.text?.json)}</Styled.Text>
            </Styled.Content>
        </Styled.Container>
    );
};

export default Text;
