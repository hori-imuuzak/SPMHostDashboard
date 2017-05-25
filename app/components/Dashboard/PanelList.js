import React, { PropTypes, Component } from 'react';
import {
  View,
  Text,
  ListView,
} from 'react-native';
import styles from './style';

import PanelItem from './PanelItem';

export default class PanelList extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows(props.panelValues),
    };

    this.renderHeader = this.renderHeader.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  renderHeader() {
    return (
      <Text
        style={styles.panelListHeader}>
        {this.props.headerText}
      </Text>
    );
  }

  renderRow(row) {
    let index = this.props.panelValues.indexOf(row);
    let isLeft = (index === 0);
    return (
      <PanelItem
        label={row.label}
        value={row.value}
        unitText={row.unitText}
        type={row.type}
        isLeft={isLeft}
      />
    );
  }

  render() {
    return (
      <View>
        {this.renderHeader()}
        <ListView
          contentContainerStyle={styles.panelList}
          renderRow={this.renderRow}
          dataSource={this.state.dataSource}
        />
      </View>
    );
  }
}

PanelList.propTypes = {
  headerText: PropTypes.string,
  panelValues: PropTypes.arrayOf(PropTypes.any),
};