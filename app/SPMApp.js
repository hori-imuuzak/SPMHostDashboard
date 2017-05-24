import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/Store';
import NavigationContainer from './containers/NavigationContainer';

export default class SPMApp extends Component {
  constructor(props) {
    super(props);

    this.statusBarHeight =
      (Platform.OS === 'ios' ? 20 : 0);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ paddingTop: this.statusBarHeight, flex: 1 }}>
          <NavigationContainer />
        </View>
      </Provider>
    );
  }
}