import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Colors, FontSize, Spacing} from '../styles';
import {getToday, greeting} from '../utils/date';

export const WelcomeMessage = () => (
  <View style={styles.container}>
    <Text style={styles.today} accessibilityLabel="Today is">
      {getToday()}
    </Text>
    <Text style={styles.greeting} testID="greeting">
      {greeting()}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {width: '100%'},
  today: {
    fontSize: FontSize.x1,
    color: Colors.BLACK,
    fontWeight: '500',
    textAlign: 'center',
  },
  greeting: {
    fontSize: FontSize.x3,
    color: Colors.BLACK,
    fontWeight: '500',
    textAlign: 'left',
    paddingLeft: Spacing.x2,
  },
});
