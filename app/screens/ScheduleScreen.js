import React, { Component } from 'react';
import {
	View,
	Image,
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

ScheduleScreen.navigationOptions = {
	tabBarLabel: 'スケジュール',
	tabBarIcon: ({ tintColor }) => (
		<Image
			source={require('../resources/images/icon_schedule.png')}
			style={navStyle.styles.icon}
		/>
	),
};