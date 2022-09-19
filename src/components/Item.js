import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {PokeData} from '../context/Api'
import { SvgCssUri } from 'react-native-svg';

export default props => {
    const {navigation} = props
    const {name, url} = props.item
    const {index} = props
    const [img, setImg] = useState("");
    const pokeContext = PokeData();


    fetch(url)
        .then(resposta => resposta.json())
        .then( json => {
            const imgSource = json.sprites.other.dream_world.front_default
            setImg(imgSource)     
    });

    return (

        <View>
            <TouchableOpacity style={styles.content}
            activeOpacity={0.3}
            onPress={() => {navigation.navigate("Infos"), props.setPokemons({name,  url, index})}}
            onClose={props.onClose}>
                <View style={styles.item}>
                    <SvgCssUri width='30%'
                    height='70%'
                    uri={img}
                    />
                    <View>
                        <Text style={styles.listTxt}>{name}</Text>
                        <Text style={styles.listTxt}>{name}</Text>
                    </View>
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
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 10,
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