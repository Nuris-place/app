import React from 'react';
import type { Node } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from '@apollo/client';
import {
  SafeAreaView,
} from 'react-native';
import Table from './components/Table';
import client from './client';

const App: () => Node = () => {

  return (
    <ApolloProvider client={client}>
      <SafeAreaView>
        <Table items={[
          {
            label: 'Label',
            value: 'Value',
          }, 
          {
            label: 'Label',
            value: 'Value',
          }, {
            label: 'Label',
            value: 'Value',
          }
        ]} />
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default App;
