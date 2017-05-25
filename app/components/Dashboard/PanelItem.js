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
  renderTypeAmount() {
    let [label, value, unitText] = [
      this.props.label,
      this.props.value,
      this.props.unitText,
    ];
    let marginStyle = (this.props.isLeft ? styles.panel_left : styles.panel_right);

    return (
      <View style={[styles.panel, marginStyle]}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
            }}>
            {label}
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 28,
              color: '#0f0',
              alignSelf: 'center',
            }}>
            {value}
          </Text>
          <Text
            style={{
              alignSelf: 'center',
            }}>
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
  isLeft: PropTypes.bool,
};