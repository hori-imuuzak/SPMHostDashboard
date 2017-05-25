import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './style';

export default class DashboardItemHeader extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerPrev}>
          <Image
            source={require('../../resources/images/btn_back.png')}
            style={styles.headerButton}
          />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>すべてのスペース</Text>
        </View>
        <TouchableOpacity style={styles.headerNext}>
          <Image
            source={require('../../resources/images/btn_next.png')}
            style={styles.headerButton}
          />
        </TouchableOpacity>
      </View>
    );
  }
}