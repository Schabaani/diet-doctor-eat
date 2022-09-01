import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Colors, FontSize, Spacing} from '../styles';

type TProps = {
  header: string;
};

export const SectionHeader = ({header}: TProps) => (
  <Text style={styles.header}>{header}</Text>
);
const styles = StyleSheet.create({
  header: {
    marginBottom: Spacing.x1,
    fontSize: FontSize.x2,
    color: Colors.GREY,
  },
});
