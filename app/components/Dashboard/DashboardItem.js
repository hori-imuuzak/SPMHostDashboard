import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import Graph from '../../components/DummyGraph';

export default class DashboardItem extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Graph />
      </View>
    );
  }
}