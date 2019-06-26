import React, {Component} from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet} from 'react-native';

class ListItem extends Component {
  
    render() {

        const {regularUrl, thumbnailUrl, authorName, navigate} = this.props;

        return (
            <TouchableOpacity onPress={() => navigate(regularUrl)}>
                <View style={styles.imgContainer}>
                    <Image source={{uri: thumbnailUrl}} style={styles.img}/>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionItem}>Author: {authorName}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    img: {
        width: '100%', 
        height: 200,
    },
    imgContainer: {
        position: 'relative',
    },
    descriptionContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black',
        opacity: 0.6,
        padding: 5,
    },
    descriptionItem: {
        flex: 1,
        color: 'white',
        marginLeft: 10,
    }
})

export default ListItem;