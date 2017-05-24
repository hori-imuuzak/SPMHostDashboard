import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import DateFilterButton from '../DateFilterButton';
import styles from './style';

export default class DateFilterSelector extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <DateFilterButton 
            selected={this.props.dateFilterType === 0}
            onSelect={this.props.doFilterCurrentMonth}
            >今月</DateFilterButton>
          <DateFilterButton 
            selected={this.props.dateFilterType === 1}
            onSelect={this.props.doFilterLastMonth}
            >先月</DateFilterButton>
          <DateFilterButton 
            selected={this.props.dateFilterType === 2}
            onSelect={this.props.doFilterCurrentYear}
            >今年</DateFilterButton>
          <DateFilterButton 
            selected={this.props.dateFilterType === 3}
            onSelect={this.props.doFilterLast30Days}
            >31日間</DateFilterButton>
          <DateFilterButton 
            selected={this.props.dateFilterType === 4}
            onSelect={this.props.doFilterLast365Days}
            >365日間</DateFilterButton>
        </View>
      </View>
    );
  }
}