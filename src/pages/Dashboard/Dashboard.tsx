import { View, Text, TouchableHighlight } from 'react-native';
import React from 'react';
import { Heading } from '@shared/ui';

const Dashboard = () => {
  return (
    <View>
      <TouchableHighlight onPress={() => console.log('onPress')}>
        <Heading>Dashboard</Heading>
      </TouchableHighlight>
    </View>
  );
};

export default Dashboard;
