import { ContentfulModule } from '@ncb/types/index';
import gql from 'graphql-tag';
import Cards from './Cards';

const Module: ContentfulModule = {
    typename: 'ModuleCards',
    component: Cards,
    query: gql`
        query moduleCards($id: String!) {
            moduleCards(id: $id) {
                title
                headline
                subheadline
                cardsCollection {
                    items {
                        sys {
                            id
                        }
                        headline
                        description
                        internalLink {
                            slug
                        }
                        image {
                            url
                            width
                            height
                            title
                        }
                    }
                }
            }
        }
    `,
};

export default Module;
