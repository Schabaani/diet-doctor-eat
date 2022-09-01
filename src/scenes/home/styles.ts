import {StyleSheet} from 'react-native';
import {Spacing, Rounded} from '../../styles/';
import colors from '../../styles/colors';

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  flatlist: {
    flex: 1,
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: Rounded.x6,
    width: '100%',
    paddingTop: 20,
    marginTop: 20,
    paddingLeft: Spacing.x2,
  },
});
