import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Table from './components/Table';

const App: () => Node = () => {

  return (
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
  );
};

export default App;
