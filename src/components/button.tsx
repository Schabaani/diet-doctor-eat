import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';

type TProps = {
  style?: ViewStyle;
  onPress?: () => void;
  testID?: string;
  children: JSX.Element | JSX.Element[];
};

export const Button = (props: TProps) => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={props.style}
    testID={props.testID ?? 'custom-button'}
    onPress={() => {
      if (props.onPress) props.onPress();
    }}>
    {props.children}
  </TouchableOpacity>
);
