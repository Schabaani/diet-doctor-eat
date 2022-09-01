import React from 'react';
import {FlatList, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeFactory from '../../components/factory-home';
import {WelcomeMessage} from '../../components/welcome-message';
import useFetch from '../../hooks/useFetch';
import {THomeScreen} from '../../interfaces';
import {Spacing} from '../../styles';
import {Style} from './styles';

export default function HomeScreen({navigation}: THomeScreen) {
  const {data, error} = useFetch<any[]>('api/home');
  return (
    <LinearGradient
      colors={['#f2f2f2', '#d9d9d9']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      locations={[0, 0.5]}
      style={Style.container}>
      <SafeAreaView edges={['top']} style={Style.container}>
        <WelcomeMessage />
        <FlatList
          testID="main-flat-list"
          data={data}
          style={Style.flatlist}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  marginBottom: Spacing.x4,
                }}>
                {HomeFactory.build(item)}
              </View>
            );
          }}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}
