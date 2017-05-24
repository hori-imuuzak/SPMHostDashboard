import React, { Component } from 'react';
import {
  View
} from 'react-native';
import styles from './style';

import HostNamePicker from '../HostNamePicker';
import UserIcon from '../UserIcon';
import NotificationIcon from '../NotificationIcon';

export default class HomeNavigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.userIcon}>
            <UserIcon />
          </View>
          <View style={styles.hostName}>
            <HostNamePicker />
          </View>
          <View style={styles.notification}>
            <NotificationIcon />
          </View>
        </View>
      </View>
    );
  }
}