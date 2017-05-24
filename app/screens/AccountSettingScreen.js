import React, { Component } from 'react';
import {
	View,
	Image,
	Platform,
} from 'react-native';
import * as navStyle from '../styles/navigation';

export default class AccountSettingScreen extends Component {
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#0f0' }}>
			</View>
		);
	}
}

if (Platform.OS === 'ios') {
	AccountSettingScreen.navigationOptions = {
		tabBarLabel: 'アカウント',
		tabBarIcon: ({ tintColor }) => (
			<Image
				source={require('../resources/images/icon_accounts.png')}
				style={navStyle.styles.icon}
				/>
		),
	};
} else {
	AccountSettingScreen.navigationOptions = {
		drawerLabel: 'アカウント',
		drawerIcon: ({ tintColor }) => (
			<Image
				source={require('../resources/images/icon_accounts.png')}
				style={navStyle.styles.icon}
				/>
		),
	};
}