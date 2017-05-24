import React, { Component } from 'react';
import {
	View,
	Image,
	Platform,
} from 'react-native';
import * as navStyle from '../styles/navigation';

export default class ScheduleScreen extends Component {
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#0f0' }}>
			</View>
		);
	}
}

if (Platform.OS === 'ios') {
	ScheduleScreen.navigationOptions = {
		tabBarLabel: 'スケジュール',
		tabBarIcon: ({ tintColor }) => (
			<Image
				source={require('../resources/images/icon_schedule.png')}
				style={navStyle.styles.icon}
			/>
		),
	};
} else {
	ScheduleScreen.navigationOptions = {
		drawerLabel: 'スケジュール',
		drawerIcon: ({ tintColor }) => (
			<Image
				source={require('../resources/images/icon_schedule.png')}
				style={navStyle.styles.icon}
			/>
		),
	};
}