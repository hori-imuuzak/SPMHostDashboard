import React, { Component } from 'react';
import {
	View,
	Image,
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

SpaceListScreen.navigationOptions = {
	tabBarLabel: 'スペース管理',
	tabBarIcon: ({ tintColor }) => (
		<Image
			source={require('../resources/images/icon_space.png')}
			style={navStyle.styles.icon}
			/>
	),
};