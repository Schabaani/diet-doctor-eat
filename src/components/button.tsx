import React from 'react';
import {TouchableOpacity, ViewStyle, Animated, StyleProp} from 'react-native';

type TProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  testID?: string;
  children: JSX.Element | JSX.Element[];
};

export const Button = (props: TProps) => {
  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [1, 0.8];
  const scale = animation.interpolate({inputRange, outputRange});

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 0.5,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Animated.View style={[{transform: [{scale}]}]}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={props.style}
        testID={props.testID ?? 'custom-button'}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={() => {
          if (props.onPress) props.onPress();
        }}>
        {props.children}
      </TouchableOpacity>
    </Animated.View>
  );
};
