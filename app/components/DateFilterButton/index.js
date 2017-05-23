import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './style';

export default class DateFilterButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.selected,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selected: nextProps.selected,
    });
  }

  render() {
    let containerStyle = this.state.selected ? styles.selectedContainerStyle : null;
    let textStyle = this.state.selected ? styles.selectedTextStyle : null;

    return (
        <TouchableOpacity
          style={[styles.defaultContainerStyle, containerStyle]}
          onPress={this.props.onSelect}>
          <Text style={[styles.defaultTextStyle, textStyle]}>
            {this.props.children}
          </Text>
        </TouchableOpacity>
    );
  }
}

DateFilterButton.propTypes = {
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
};

DateFilterButton.defaultProps = {
  selected: false,
};