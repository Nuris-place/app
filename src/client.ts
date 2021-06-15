import { ApolloClient, InMemoryCache } from '@apollo/client';
import { API_URI } from 'react-native-dotenv'

const client = new ApolloClient({
  uri:
    'https://graphql.contentful.com/content/v1/spaces/xxpkoxzstj72?access_token=FETcxURAYtsZjInP-K4jdBBwmOfIqM312pgn8BGmwiU',
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});

export default client;