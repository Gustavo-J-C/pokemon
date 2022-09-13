import React, {useEffect, useState} from 'react'
import {View, Text, Image, Modal, StyleSheet, TouchableOpacity, Platform, TouchableWithoutFeedback} from 'react-native'
import { SvgCssUri } from 'react-native-svg';

export default props => {

    const [img, setImg] = useState('')
    
    useEffect(() => {
        fetch(props.data.url)
        .then(resposta => resposta.json())
        .then( json => {
            const imgSource = json.sprites.other.dream_world.front_default
            setImg(imgSource)     
        });
    }, [props])

    console.log(props.data);
    return (
        <Modal transparent visible={props.isVisible} 
            animation='slide'>
            <TouchableWithoutFeedback onPress={props.onCancel}>
                <View style={styles.overLay}></View>
            </TouchableWithoutFeedback>
            <View style={styles.conta}>
                <SvgCssUri width='30%'
                height='30%'
                uri={img}
                />
                <Text>{props.data?.name}</Text>
            </View>
            <TouchableWithoutFeedback onPress={props.onCancel}>
                <View style={styles.overLay}></View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

const styles = StyleSheet.create({
    overLay: {
        flex: 1,
        backgroundColor: 'rgba(0 , 0 , 0 , 0.7)'
    },
    conta: {
        flex: 4,
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    img: {
        height: "5%",
        width: "5%"
    }
})