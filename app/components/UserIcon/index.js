import React, { Component } from 'react';
import { Image } from 'react-native';

import styles from './style';

export default class UserIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Image
        defaultSource={require('../../resources/images/default_user.png')}
        source={this.props.imageUrl}
        style={styles.image}
      />
    );
  }
};