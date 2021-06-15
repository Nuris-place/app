import { gql } from '@apollo/client';

const QUERY = gql`
{
  typeCollection(limit: 100) {
    items {
      title
    }
  }
}
`;

export default QUERY;