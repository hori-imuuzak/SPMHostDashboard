import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Platform,
} from 'react-native';

import Graph from '../../components/DummyGraph';
import PanelItem from './PanelItem';
import PanelList from './PanelList';

const mockDashboard = [
  {
    headerText: "ゲストからのアクション",
    panelValues: [
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
      {
        label: "成約数",
        value: "12",
        unitText: "件",
        type: PanelItem.Type.Amount,
      },
      {
        label: "レビュー数",
        value: "98",
        unitText: "件",
        type: PanelItem.Type.Amount,
      },
    ]
  },
  {
    headerText: "金額",
    panelValues: [
      {
        label: "成約金額",
        value: "13,500",
        unitText: "¥",
        type: PanelItem.Type.Money,
      },
      {
        label: "支払い合計",
        value: "8,500",
        unitText: "¥",
        type: PanelItem.Type.Money,
      },
    ]
  },
  {
    headerText: "各種利率",
    panelValues: [
      {
        label: "稼働率",
        value: "8",
        unitText: "%",
        type: PanelItem.Type.Amount,
      },
      {
        label: "成約率",
        value: "50",
        unitText: "%",
        type: PanelItem.Type.Amount,
      },
      {
        label: "返答率",
        value: "8",
        unitText: "%",
        type: PanelItem.Type.Amount,
      },
      {
        label: "承認率",
        value: "50",
        unitText: "%",
        type: PanelItem.Type.Amount,
      },
      {
        label: "平均返答時間",
        value: "1",
        unitText: "時間",
        type: PanelItem.Type.Amount,
      },
    ]
  }
]

export default class DashboardPage extends Component {

  constructor(props) {
    super(props);

    this.renderBottomDummyIOS = this.renderBottomDummyIOS.bind(this);
  }

  renderBottomDummyIOS() {
    // ダミーのビュー(このやり方でいいのか？)
    if (Platform.OS === 'ios') {
      return <View style={{ height: 40 }}></View>;
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
          headerText={mockDashboard[0].headerText}
          panelValues={mockDashboard[0].panelValues}
        />
        <PanelList
          headerText={mockDashboard[1].headerText}
          panelValues={mockDashboard[1].panelValues}
        />
        <PanelList
          headerText={mockDashboard[2].headerText}
          panelValues={mockDashboard[2].panelValues}
        />
        {this.renderBottomDummyIOS()}
      </ScrollView>
    );
  }
}