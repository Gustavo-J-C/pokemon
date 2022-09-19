import React, {useState, useEffect} from 'react'
import {View, Text, Modal, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import axios from 'axios'

export default props => {

    const initialState = {
        pokemonList: {},
        showInfo: false,
        atual: {},
        pokeImg: {}
    }

    const [pokemons, setPokemons] = useState(initialState)

    const getPokemonData = () => {
        const url = "https://pokeapi.co/api/v2/pokemon/";
        fetch(url)
            .then(resposta => resposta.json())
            .then( json => {
                const pokemonList = json.results                
                setPokemons({...pokemons, pokemonList})
            });
    }

    const getLabel = (name) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}/`
        let img = ''
        fetch(url)
            .then(resposta => resposta.json())
            .then( json => {
                img = json.sprites.other.dream_world.front_default
                setPokemons({...pokemons, showInfo: true, pokeImg: img})     
            });
    }
    

   
    
    const renderItem = ({ ...data}) => (
        <TouchableOpacity style={styles.listContent} onPress={() => {setPokemons({...pokemons, showInfo: true, atual: data}), getLabel(data.name)}}
         activeOpacity={0.3}>
            <View style={styles.listItem}>
                <Text style={styles.listTxt}>{data.name}</Text>
            </View>
        </TouchableOpacity>
    );
    

    return (
        <View style={styles.container}>
            <FlatList data={pokemons.pokemonList}
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
        marginTop: 10,
    },
    listItem: {
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