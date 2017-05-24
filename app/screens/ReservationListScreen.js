import React, { Component } from 'react';
import {
	View,
	Image,
	Platform,
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

if (Platform.OS === 'ios') {
	ReservationListScreen.navigationOptions = {
		tabBarLabel: '予約一覧',
		tabBarIcon: ({ tintColor }) => (
			<Image
				source={require('../resources/images/icon_reservation.png')}
				style={navStyle.styles.icon}
				/>
		),
	};
} else {
	ReservationListScreen.navigationOptions = {
		drawerLabel: '予約一覧',
		drawerIcon: ({ tintColor }) => (
			<Image
				source={require('../resources/images/icon_reservation.png')}
				style={navStyle.styles.icon}
				/>
		),
	};
}