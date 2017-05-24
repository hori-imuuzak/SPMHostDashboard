import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import {
  ViewPager,
} from 'rn-viewpager';

import styles from './style';

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View
          style={styles.container}>
          <ViewPager
            style={styles.viewPager}
            initialPage={0}
            scrollEnabled>
            <View style={{flex: 1, backgroundColor: 'green'}}>
            </View>
            <View style={{flex: 1, backgroundColor: 'blue'}}>
            </View>
            <View style={{flex: 1, backgroundColor: 'yellow'}}>
            </View>
            <View style={{flex: 1, backgroundColor: 'green'}}>
            </View>
            <View style={{flex: 1, backgroundColor: 'blue'}}>
            </View>
            <View style={{flex: 1, backgroundColor: 'yellow'}}>
            </View>
          </ViewPager>
        </View>
    );
  }
}