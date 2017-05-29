import React, { Component } from 'react';
import {
	View,
	Image,
	Platform,
	ScrollView,
} from 'react-native';
import * as navStyle from '../styles/navigation';

import HomeNavigation from '../components/HomeNavigation';
import DateFilterSelector from '../components/DateFilterSelector';
import Dashboard from '../components/Dashboard';
import Graph from '../components/DummyGraph';

export default class HomeScreen extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
				<HomeNavigation navigation={this.props.navigation} />
				<DateFilterSelector {...this.props} />
				<Dashboard {...this.props} />
			</View>
		);
	}
}

if (Platform.OS === 'ios') {
	HomeScreen.navigationOptions = {
		tabBarLabel: 'ホーム',
		tabBarIcon: ({ tintColor }) => (
			<Image
				source={require('../resources/images/icon_home.png')}
				style={navStyle.styles.icon}
				/>
		),
	};
} else {
	HomeScreen.navigationOptions = {
		drawerLabel: 'ホーム',
		drawerIcon: ({ tintColor }) => (
			<Image
				source={require('../resources/images/icon_home.png')}
				style={navStyle.styles.icon}
				/>
		),
	};
}