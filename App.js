import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './app/store/store'

import GalleryScreen from './app/components/GalleryScreen'


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
            <GalleryScreen />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
