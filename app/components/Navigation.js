import * as Screen from '../config/route';
import { TabNavigator } from 'react-navigation';

export const navigation = TabNavigator(
  Screen.route, {
    tabBarOptions: {
      showIcon: true,
    }
  });