import React, { Component } from 'react';
import {
  Image,
  Platform,
} from 'react-native';

import styles from './style';

export default class UserIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Image
        defaultSource={require('../../resources/images/default_user.png')}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/2016-06-12_Orange_and_white_tabby_cat_born_in_2016_%E8%8C%B6%E3%83%88%E3%83%A9%E7%99%BD%E3%81%AD%E3%81%93%E5%AD%90%E7%8C%AB_2016%E5%B9%B4%E7%94%9F%E3%81%BE%E3%82%8C_DSCF6403%E2%98%86%E5%BD%A1.jpg' }}
        style={styles.image}
      />
    );
  }
};