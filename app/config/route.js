import HomeScreen from '../screens/HomeScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import ReservationListScreen from '../screens/ReservationListScreen';
import SpaceListScreen from '../screens/SpaceListScreen';
import AccountSettingScreen from '../screens/AccountSettingScreen';

export const route = {
	Home: {
		screen: HomeScreen,
	},
	Schedule: {
		screen: ScheduleScreen,
	},
	Reservation: {
		screen: ReservationListScreen,
	},
	SpaceList: {
		screen: SpaceListScreen,
	},
	AccountSetting: {
		screen: AccountSettingScreen,
	},
};