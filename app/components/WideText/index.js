import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from './styles';

export default class WideText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={[{fontSize: this.props.fontSize}, styles.defaultStyle]}>
        {this.props.children}
      </Text>
    );
  }
};