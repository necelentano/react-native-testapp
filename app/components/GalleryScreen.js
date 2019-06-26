import React, {Component} from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View} from 'react-native';

import {connect} from 'react-redux';

import {fetchImages} from '../store/actions/fetchImagesAction';

import ListItem from './ListItem'

class GalleryScreen extends Component {

    static navigationOptions = {
        title: 'Unsplash Gallery'
    }

    componentDidMount() {
        this.props.fetchImages()
    }

    _keyExtractor = (item) => item.id;

    _renderItem = ({item}) => (
        < ListItem id = {item.id}
              thumbnailUrl = {item.urls.small}
              regularUrl = {item.urls.regular}
              authorName = {item.user.name}
              navigate = {this.goToImageScreen}/>
    );

    goToImageScreen = (regularUrl) => {
        return this.props.navigation.navigate('Image', {regularUrl: regularUrl})
    }

    render() {

        if (this.props.isFetching) {
            return ( 
                <View> 
                  <ActivityIndicator size = 'large' animating />
                </View>);
            } else {
                return ( 
                  <View style = {styles.container}>
                      <FlatList 
                          data={this.props.data}
                          keyExtractor={this._keyExtractor}
                          renderItem={this._renderItem}/> 
                  </View>
                )
            }
        }
    }

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
});

const mapStateToProps = state => {
    return {
        data: state.fetchImagesData.apidata,
        isFetching: state.fetchImagesData.isFetching
    }
}

export default connect(mapStateToProps, {
    fetchImages
})(GalleryScreen)