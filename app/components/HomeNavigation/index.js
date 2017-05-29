import React, { Component } from 'react';
import {
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import styles from './style';

import DrawerHumberger from '../DrawerHumberger';
import HostNamePicker from '../HostNamePicker';
import UserIcon from '../UserIcon';
import NotificationIcon from '../NotificationIcon';

export default class HomeNavigation extends Component {
  constructor(props) {
    super(props);

    this.renderHumberger = this.renderHumberger.bind(this);
  }

  renderHumberger() {
    if (Platform.OS === 'android') {
      return (
        <View style={styles.drawerHumberger}>
          <TouchableOpacity
            onPress={()=> {this.props.navigation.navigate('DrawerOpen')}}>
            <DrawerHumberger />
          </TouchableOpacity>
        </View>
      )
    }
  }

  render() {
    console.log('android render');
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {this.renderHumberger()}
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