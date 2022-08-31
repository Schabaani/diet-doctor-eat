import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {TDetailScreen} from '../../interfaces';
import {Style} from './styles';

const DetailScreen = (props: TDetailScreen) => {
  return (
    <SafeAreaView style={Style.container}>
      <Text>Detail</Text>
    </SafeAreaView>
  );
};

export default DetailScreen;
