import React from 'react';
import {Platform, View} from 'react-native';

type TProps = {
  children: JSX.Element | JSX.Element[];
};

export const Shadow = ({children}: TProps) => {
  return (
    <View
      style={{
        ...Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1.5},
            shadowOpacity: 0.2,
            shadowRadius: 2,
          },
          android: {
            elevation: 5,
          },
        }),
      }}>
      {children}
    </View>
  );
};
