import React, { Component } from 'react';
import {
	View,
	Image,
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

AccountSettingScreen.navigationOptions = {
	tabBarLabel: 'アカウント',
	tabBarIcon: ({ tintColor }) => (
		<Image
			source={require('../resources/images/icon_accounts.png')}
			style={navStyle.styles.icon}
			/>
	),
};