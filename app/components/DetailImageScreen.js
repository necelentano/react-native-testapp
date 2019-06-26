import React, {Component} from 'react';
import { StyleSheet, View, Image} from 'react-native';


export default class DetailImage extends Component {

    static navigationOptions = {
        title: 'Full Image'
    }

    render() {
        const { regularUrl } = this.props.navigation.state.params;
    
        return (
            <View style={styles.container}>
                <Image source={{uri: regularUrl}} style={styles.img}/>
            </View>
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
    img: {
        width: '100%',
        height: '100%',
    }
});