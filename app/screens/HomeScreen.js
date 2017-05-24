import React, { Component } from 'react';
import {
	View,
	Image,
} from 'react-native';
import * as navStyle from '../styles/navigation';

import HomeNavigation from '../components/HomeNavigation';
import DateFilterSelector from '../components/DateFilterSelector';
import Graph from '../components/DummyGraph';

export default class HomeScreen extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#f00' }}>
				<HomeNavigation />
				<DateFilterSelector {...this.props}/>
				<Graph />
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