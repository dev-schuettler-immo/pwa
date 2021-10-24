import { ContentfulModule } from '@ncb/types/index';
import gql from 'graphql-tag';
import Text from './Text';

const Module: ContentfulModule = {
    typename: 'ModuleText',
    component: Text,
    query: gql`
        query moduleText($id: String!) {
            moduleText(id: $id) {
                headline
                subheadline
                image {
                    url
                    width
                    height
                    title
                }
                text {
                    json
                }
            }
        }
    `,
};

export default Module;
