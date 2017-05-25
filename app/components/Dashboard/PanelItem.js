import React, { PropTypes, Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './style';

export default class PanelItem extends Component {

  constructor(props) {
    super(props);
  }

  // 金額の場合
  renderTypeMoney() {

  }

  // 金額でない場合
  renderTypeAmount(label, value, unitText) {
    return (
      <View style={styles.panel}>
        <View
          style={{ flex: 1 }}>
          <Text
            style={{ textAlign: 'center' }}>
            {label}
          </Text>
        </View>
        <View
          style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 24,
            }}>
            {value}
          </Text>
          <Text>
            {unitText}
          </Text>
        </View>
      </View>
    )
  }

  render() {
    let isTypeAmount = (this.props.type === PanelItem.Type.Amount);
    return (
      (isTypeAmount ? this.renderTypeAmount() : this.renderTypeMoney())
    );
  }
}

PanelItem.Type = {
  Amount: "TypeAmount",
  Money: "TypeMoney",
};

PanelItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  unitText: PropTypes.string,
  type: PropTypes.string,
};