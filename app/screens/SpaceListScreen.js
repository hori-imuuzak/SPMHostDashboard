import React, { Component } from 'react';
import {
	View,
	Image,
	Platform,
} from 'react-native';
import * as navStyle from '../styles/navigation';

export default class SpaceListScreen extends Component {
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#00f' }}>
			</View>
		);
	}
}

if (Platform.OS === 'ios') {
	SpaceListScreen.navigationOptions = {
		tabBarLabel: 'スペース管理',
		tabBarIcon: ({ tintColor }) => (
			<Image
				source={require('../resources/images/icon_space.png')}
				style={navStyle.styles.icon}
				/>
		),
	};
} else {
	SpaceListScreen.navigationOptions = {
		drawerLabel: 'スペース管理',
		drawerIcon: ({ tintColor }) => (
			<Image
				source={require('../resources/images/icon_space.png')}
				style={navStyle.styles.icon}
				/>
		),
	};
}