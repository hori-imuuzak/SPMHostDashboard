import React, { PropTypes, Component } from 'react';
import {
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

    this.renderRow = this.renderRow.bind(this);
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
      <ListView
        contentContainerStyle={styles.panelList}
        renderRow={this.renderRow}
        dataSource={this.state.dataSource}
      />
    );
  }
}

PanelList.propTypes = {
  panelValues: PropTypes.arrayOf(PropTypes.any),
};