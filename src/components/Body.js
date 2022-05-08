import React, {useState, useEffect} from 'react'
import {View, Text, Modal, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import axios from 'axios'

export default props => {

    const [pokemons, setPokemons] = useState(null)

    const getPokemonData = () => {
        const url = "https://pokeapi.co/api/v2/pokemon/";
        console.log("vamos ao fetch");
        fetch(url)
            .then(resposta => resposta.json())
            .then( json => {
                const pokemonList = json.results
                pokemonList.sort(function (a,b) {
                    return (a.nome < b.nome) ? -1 : true
                })
                setPokemons(pokemonList)
            });
    }
    

    useEffect(() => {
      getPokemonData()   
    }, [])
    
    const renderItem = ({ ...pokemons }) => (
        <TouchableOpacity style={styles.listContent} activeOpacity={0.3}>
            <View style={styles.listItem}>
                <Text style={styles.listTxt}>{pokemons.name}</Text>
            </View>
        </TouchableOpacity>
    );
    

    return (
        <View style={styles.container}>
            <FlatList data={pokemons}
            renderItem={({item}) => renderItem({...item})}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'rgba(255,255,255,0.1)'
    },
    listContent: {

    },
    listItem: {
        height: 40,
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