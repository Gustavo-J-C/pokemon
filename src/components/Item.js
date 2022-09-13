import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default props => {
    const {name, url} = props.item
    const {index} = props
    return (

        <View>
            <TouchableOpacity style={styles.content}
            activeOpacity={0.3}
            onPress={() => {props.modal(true), props.setPokemons({name,  url, index})}}
            onClose={props.onClose}>
                <View style={styles.item}>
                    <Text style={styles.listTxt}>{name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
    
}

const styles = StyleSheet.create({
    content: {
        marginTop: 10,
    },
    item: {
        height: 80,
        width: '95%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'rgba(252,0,0,0.8)',
        marginTop: 10
    },
    listTxt: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    }
})