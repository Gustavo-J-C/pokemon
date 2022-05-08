import React from 'react'
import {View, Text, ImageBackground, StyleSheet, TextInput} from 'react-native'
import MainImage from '../../assets/images/MainBackground.jpg'
import Header from '../components/Header'
import Body from '../components/Body'

export default props => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={MainImage}>
                <Header/>
                <Body/>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
    },
    background: {
        flex: 1
    },
    input: {
        width: '90%',
        backgroundColor: "#fff",
        borderWidth: 1,
    }
})