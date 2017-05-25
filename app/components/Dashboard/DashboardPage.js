import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Platform,
} from 'react-native';

import Graph from '../../components/DummyGraph';
import PanelItem from './PanelItem';
import PanelList from './PanelList';

export default class DashboardPage extends Component {

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
        <PanelList
          headerText="ゲストからのアクション"
          panelValues={
            [
              {
                label: "予約リクエスト数",
                value: "24",
                unitText: "件",
                type: PanelItem.Type.Amount,
              },
              {
                label: "お問い合わせ数",
                value: "8",
                unitText: "件",
                type: PanelItem.Type.Amount,
              },
            ]
          }
          />
        <Graph />
        <Graph />
        <Graph />
        {this.renderBottomDummyIOS()}
      </ScrollView>
    );
  }
}