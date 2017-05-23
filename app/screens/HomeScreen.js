import React, { Component } from 'react';
import {
	View,
	Image,
} from 'react-native';
import * as navStyle from '../styles/navigation';

import HomeNavigation from '../components/HomeNavigation';

export default class HomeScreen extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#f00' }}>
				<HomeNavigation />
			</View>
		);
	}
}

HomeScreen.navigationOptions = {
	tabBarLabel: 'ホーム',
	tabBarIcon: ({ tintColor }) => (
		<Image
			source={require('../resources/images/icon_home.png')}
			style={navStyle.styles.icon}
			/>
	),
};