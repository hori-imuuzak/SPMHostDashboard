import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import {
  ViewPager,
} from 'rn-viewpager';
import styles from './style';

import DashboardItemHeader from './DashboardItemHeader';
import DashboardItem from './DashboardItem';

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={styles.container}>
        <DashboardItemHeader />
        <ViewPager
          style={styles.viewPager}
          initialPage={0}
          scrollEnabled>
          <View style={{ flex: 1 }}>
            <DashboardItem />
          </View>
          <View style={{ flex: 1 }}>
            <DashboardItem />
          </View>
          <View style={{ flex: 1 }}>
            <DashboardItem />
          </View>
        </ViewPager>
      </View>
    );
  }
}