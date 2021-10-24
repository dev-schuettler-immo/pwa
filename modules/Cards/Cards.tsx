import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useRouter } from 'next/router';
import * as Styled from './styles';

const Cards = ({ moduleCards }: any) => {
    const router = useRouter();

    const convertLink = (link?: string) => {
        if (!link) {
            return null;
        }

        return `${link}?w=500&h=500&fit=fill`;
    };

    if (moduleCards?.cardsCollection?.items?.length < 1) {
        return null;
    }

    const handleImageClick = (link?: string) => {
        if (!link) {
            return;
        }

        router.push(link);
    };

    return (
        <Styled.Container>
            {moduleCards?.headline && <Styled.Headline>{moduleCards?.headline}</Styled.Headline>}
            {moduleCards?.subheadline && <Styled.Subheadline>{moduleCards.subheadline}</Styled.Subheadline>}

            <Styled.Cards>
                {moduleCards.cardsCollection.items.map((item: any) => {
                    return (
                        <Styled.Card key={item?.sys?.id}>
                            <Styled.ImageContainer onClick={() => handleImageClick(item?.internalLink?.slug)}>
                                {item?.headline && <Styled.CardHeadline>{item.headline}</Styled.CardHeadline>}
                                <Styled.ImageNext
                                    layout='responsive'
                                    width='400'
                                    height='400'
                                    src={convertLink(item?.image?.url) || '/placeholder.jpg'}
                                />
                            </Styled.ImageContainer>

                            {item.description && (
                                <Styled.Content>
                                    <Styled.Text>{item.description}</Styled.Text>
                                </Styled.Content>
                            )}
                        </Styled.Card>
                    );
                })}
            </Styled.Cards>
        </Styled.Container>
    );
};

export default Cards;
