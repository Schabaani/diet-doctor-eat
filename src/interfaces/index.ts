import {RootStackParamList} from '../navigations/router-prop';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';

type THomeScreen = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
};

type TDetailScreen = {
  navigation: StackNavigationProp<RootStackParamList, 'DetailScreen'>;
};

type TNav = {
  navigate: (value: string, params?: Object) => void;
};

export {THomeScreen, TDetailScreen, TNav};
