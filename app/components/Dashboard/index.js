import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import {
  ViewPager,
} from 'rn-viewpager';
import styles from './style';

import DashboardHeader from './DashboardHeader';
import DashboadPage from './DashboardPage';

export default class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.onPageScrollStateChanged = this.onPageScrollStateChanged.bind(this);
    this.onPageSelected = this.onPageSelected.bind(this);

    this.state = {
      currentPage: this.props.spaceIndex,
      dragging: false,
    };
  }

  onPageScrollStateChanged(scrollState) {
    if (scrollState === 'dragging' && !this.state.dragging) {
      this.setState({
        dragging: true,
      });
    }
  }

  onPageSelected(page) {
    if (this.state.dragging) {
      this.props.setSpaceIndex(page.position);

      this.setState({
        currentPage: page.position,
        dragging: false,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentPage: nextProps.spaceIndex,
    });

    this.viewPager.setPage(nextProps.spaceIndex);
  }

  render() {
    return (
      <View
        style={styles.container}>
        <DashboardHeader
          spaceName={this.props.spaceName}
          showPrevSpace={this.props.showPrevSpace}
          showNextSpace={this.props.showNextSpace}
        />
        <ViewPager
          style={styles.viewPager}
          initialPage={0}
          onPageScrollStateChanged={this.onPageScrollStateChanged}
          onPageSelected={this.onPageSelected}
          scrollEnabled
          ref={viewPager => { this.viewPager = viewPager }}>
          <View style={{ flex: 1 }}>
            <DashboadPage />
          </View>
          <View style={{ flex: 1 }}>
            <DashboadPage />
          </View>
          <View style={{ flex: 1 }}>
            <DashboadPage />
          </View>
        </ViewPager>
      </View>
    );
  }
}