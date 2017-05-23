import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/Store';
import NavigationContainer from './containers/NavigationContainer';

export default class SPMApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ paddingTop: 20, flex: 1 }}>
          <NavigationContainer />
        </View>
      </Provider>
    );
  }
}