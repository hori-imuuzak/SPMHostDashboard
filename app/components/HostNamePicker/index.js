import React, { Component } from 'react';
import {
  Text,
  Picker,
} from 'react-native';

import styles from './styles';

export default class HostNamePicker extends Component {
  constructor(props) {
    super(props);

    this.hosts = [
        {
          id: "host1",
          name: "ホストさん1ほげほげ太郎",
        },
        {
          id: "host2",
          name: "ホストさん2ぴよぴよ二郎",
        },
        {
          id: "host3",
          name: "ホストさん3ふがふがABC",
        }
    ];

    this.state = {
      selectHost: this.hosts[0].id,
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.renderHosts = this.renderHosts.bind(this);
  }

  onChangeName(pickHostId) {
    this.setState({
      selectHost: this.hosts.filter((host) => {
        return (host.id === pickHostId)
      })[0].id,
    })
  }

  renderHosts() {
    let elems = this.hosts.map((host) => {
      return (
        <Picker.Item
          key={host.id}
          label={host.name} 
          value={host.id} />
      )
    });

    return elems;
  }

  render() {
    return (
      <Picker
        style={styles.defaultStyle}
        itemStyle={styles.item}
        selectedValue={this.state.selectHost}
        onValueChange={this.onChangeName}
        mode='dialog'
      >
        {this.renderHosts()}
      </Picker>
    );
  }
};