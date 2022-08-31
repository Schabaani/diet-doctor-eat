import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  ActivityIndicator,
  View,
} from 'react-native';
import {THomeScreen} from '../../interfaces';
import {Style} from './styles';

export default function HomeScreen({navigation}: THomeScreen) {
  return (
    <SafeAreaView style={Style.container}>
      <Text>Home</Text>
    </SafeAreaView>
  );
}
