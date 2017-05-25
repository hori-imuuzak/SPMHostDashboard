import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import {
  ViewPager,
} from 'rn-viewpager';
import styles from './style';

import DashboardHeader from './DashboardHeader';
import DashboadPage from './DashboardPage';

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={styles.container}>
        <DashboardHeader />
        <ViewPager
          style={styles.viewPager}
          initialPage={0}
          scrollEnabled>
          <View style={{ flex: 1 }}>
            <DashboadPage />
          </View>
          <View style={{ flex: 1 }}>
            <DashboadPage />
          </View>
          <View style={{ flex: 1 }}>
            <DashboadPage />
          </View>
        </ViewPager>
      </View>
    );
  }
}