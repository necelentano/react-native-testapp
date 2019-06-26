import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './app/store/store'

import {createStackNavigator, createAppContainer} from 'react-navigation';

import GalleryScreen from './app/components/GalleryScreen'
import DetailImage from './app/components/DetailImageScreen'


class App extends Component {
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

const MainNavigator = createStackNavigator({
  Gallery: {screen: GalleryScreen},
  Image: {screen: DetailImage},
});

const App = createAppContainer(MainNavigator);

export default App;