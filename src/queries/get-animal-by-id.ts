import { gql } from '@apollo/client';

const QUERY = gql`
query GET_ANIMAL_BY_ID($id: String) {
  animal(id: $id) {
    name
  }
}
`;

export default QUERY;