import React, { Component } from 'react';
import {
  Image,
  View,
} from 'react-native';

import styles from './style';

export default class DrawerHumberger extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={styles.drawerIcon}>
        <View style={styles.iconItem} />
        <View style={styles.iconItem} />
        <View style={styles.iconItem} />
      </View>
    );
  }
};