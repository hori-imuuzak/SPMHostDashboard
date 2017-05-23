import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import styles from './style';

export default class NotificationIcon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../resources/images/mail.png')}
          style={styles.icon}
        />
        <View style={styles.badgeContainer}>
          <Text
            style={styles.badgeText}>
            {99/*通知の数*/}
          </Text>
        </View>
      </View>
    );
  }
}