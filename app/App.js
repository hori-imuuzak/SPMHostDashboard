import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/Store';
import { NavigationContainer } from './container/NavigationContainer';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{paddingTop: 20, flex: 1}}>
          <NavigationContainer />
        </View>
      </Provider>
    );
  }
}