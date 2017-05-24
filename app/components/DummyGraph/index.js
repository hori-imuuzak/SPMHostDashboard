import React, { Component } from 'react';
import { 
  View,
  Text,
} from 'react-native';
import styles from './style';

export default class Graph extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>これはグラフやで</Text>
      </View>
    );
  }
}