import { gql } from '@apollo/client';

const QUERY = gql`
query GET_ANIMAL_BY_TYPE($type: String) {
    animalCollection(where:{ type: { title: $type } }) {
        items {
            sys {
                id
            }
            name
        }
    }
}
`;

export default QUERY;