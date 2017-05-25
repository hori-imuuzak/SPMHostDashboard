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
    let [value, unitText] = [
      this.props.value,
      this.props.unitText,
    ];

    return this.renderValue(
      <View
        style={{
          flex: 1.6,
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            alignSelf: 'center',
            paddingTop: 10,
          }}>
          {unitText}
        </Text>
        <Text
          style={{
            fontSize: 28,
            color: '#0f0',
            alignSelf: 'center',
          }}>
          {value}
        </Text>
      </View>
    )
  }

  // 金額でない場合
  renderTypeAmount() {
    let [value, unitText] = [
      this.props.value,
      this.props.unitText,
    ];

    return this.renderValue(
      <View
        style={{
          flex: 1.6,
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
            paddingTop: 10,
          }}>
          {unitText}
        </Text>
      </View>
    )
  }

  renderValue(valueElement) {
    let label = this.props.label;
    let marginStyle = (this.props.isLeft ? styles.panel_left : styles.panel_right);

    let transparentStyle = (this.props.label ? null : styles.blankPanel);

    return (
      <View style={[styles.panel, marginStyle, transparentStyle]}>
        <View
          style={{
            flex: 1.4,
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
        {valueElement}
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