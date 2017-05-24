import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  ViewPager,
} from 'rn-viewpager';

import styles from './style';
import DashboardItem from './DashboardItem';

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={styles.container}>
        <View style={{
          height: 40,
          justifyContent: 'center',
        }}>
          <Text style={{
            textAlign: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: 18,
          }}>すべてのスペース</Text>
        </View>
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