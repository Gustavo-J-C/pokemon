import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, ImageBackground, StyleSheet, TextInput} from 'react-native'
import Item from '../components/Item'

export default Main = ({navigation}) => {

    console.log(navigation);
    const initialState = {
        atual: {},
        url: {},
        index: 0
    }

    const getPokemonData = async () => {
        const url = "https://pokeapi.co/api/v2/pokemon/";
        await fetch(url)
            .then(resposta => resposta.json())
            .then( json => {
                const pokemonList = json.results                
                setPokeList(prevState => pokemonList)
            });
    }

    const [pokemons, setPokemons] = useState(initialState)
    const [inputState, setInputState] = useState('')
    const [modal, setModal] = useState(false)
    const [pokeList, setPokeList] = useState()
    
    useEffect(() => {
        getPokemonData()
    }, [])



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={[styles.views, {marginTop: '20%'}]}>
                    <Text style={styles.h1txt}>Sua biblioteca de <Text style={styles.clrBlack}>Poke</Text>mons</Text>
                    <Text style={styles.h2txt}>Basta pesquisar a especie que deseja</Text>
                </View>
                <View style={styles.views}>
                    <TextInput onChangeText={desc => setInputState(desc)} placeholder="informe o nome do Pokemon" style={styles.input} />
                </View>
            </View>
            <View style={styles.body}>
                <FlatList data={pokeList}
                renderItem={(item) => <Item navigation={navigation} setPokemons={setPokemons} modal={setModal} {...item}/>}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    body: {
        flex: 5,
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'rgba(255,255,255,0.1)'
    },
    header: {
        flex: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)'
    },
    views: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    h1txt: {
        color: '#595758',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    h2txt: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        elevation: 1,
    },
    clrBlack: {
        color: "red",
        fontWeight: 'bold'
    },
    input: {
        bottom: 5,
        marginTop: 20,
        width: '90%',
        margin: 20,
        height: 30,
        backgroundColor: '#FFF',
        elevation: 5,
        borderColor: "#D3D3D3",
        borderWidth: 1,
        borderRadius: 6,
        fontSize: 16,
        paddingLeft: 10
    }
})