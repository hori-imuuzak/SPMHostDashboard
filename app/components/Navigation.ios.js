import * as Screen from '../config/route';
import { TabNavigator } from 'react-navigation';

export default TabNavigator(
  Screen.route, {
    tabBarOptions: {
      showIcon: true,
    }
  });