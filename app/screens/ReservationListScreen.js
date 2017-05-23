import React, { Component } from 'react';
import {
	View,
	Image,
} from 'react-native';
import * as navStyle from '../styles/navigation';

export default class ReservationListScreen extends Component {
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#0ff' }}>
			</View>
		);
	}
}

ReservationListScreen.navigationOptions = {
	tabBarLabel: '予約一覧',
	tabBarIcon: ({ tintColor }) => (
		<Image
			source={require('../resources/images/icon_reservation.png')}
			style={navStyle.styles.icon}
			/>
	),
};