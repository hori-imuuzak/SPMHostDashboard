import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Platform,
} from 'react-native';

import Graph from '../../components/DummyGraph';

export default class DashboardItem extends Component {

  constructor(props) {
    super(props);

    this.renderBottomDummyIOS = this.renderBottomDummyIOS.bind(this);
  }

  renderBottomDummyIOS() {
    // ダミーのビュー(このやり方でいいのか？)
    if (Platform.OS === 'ios') {
      return <View style={{height: 40}}></View>;
    }
  }

  render() {
    return (
      <ScrollView
        style={{
          flex: 1,
        }}>
        <Graph />
        <Graph />
        <Graph />
        <Graph />
        {this.renderBottomDummyIOS()}
      </ScrollView>
    );
  }
}