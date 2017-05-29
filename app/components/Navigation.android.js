import * as Screen from '../config/route';
import { DrawerNavigator } from 'react-navigation';

export default DrawerNavigator (Screen.route, {
  drawerWidth: 300,
  drawerPosition: 'left',
});