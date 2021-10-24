import { ContentfulModule } from '@ncb/types/index';
import gql from 'graphql-tag';
import Stage from './Stage';

const Module: ContentfulModule = {
    typename: 'ModuleStage',
    component: Stage,
    query: gql`
        query moduleStage($id: String!) {
            moduleStage(id: $id) {
                headline
                subheadline
                image {
                    url
                    width
                    height
                }
            }
        }
    `,
};

export default Module;
