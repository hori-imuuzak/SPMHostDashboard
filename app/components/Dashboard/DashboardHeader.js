import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './style';

export default class DashboardHeader extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.headerPrev}
          onPress={this.props.showPrevSpace}>
          <Image
            source={require('../../resources/images/btn_back.png')}
            style={styles.headerButton}
          />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>{this.props.spaceName}</Text>
        </View>
        <TouchableOpacity 
          style={styles.headerNext}
          onPress={this.props.showNextSpace}>
          <Image
            source={require('../../resources/images/btn_next.png')}
            style={styles.headerButton}
          />
        </TouchableOpacity>
      </View>
    );
  }
}