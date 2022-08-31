import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../scenes/home';
import DetailScreen from '../scenes/detail';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
