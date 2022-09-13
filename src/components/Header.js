import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

export default props => {

    const [inputState, setInputState] = useState()

    return (
        <View style={styles.container}>
            <View style={[styles.views, {marginTop: '20%'}]}>
                <Text style={styles.h1txt}>Sua biblioteca de <Text style={styles.clrBlack}>Poke</Text>mons</Text>
                <Text style={styles.h2txt}>Basta pesquisar a especie que deseja</Text>
            </View>
            <View style={styles.views}>
                <TextInput onChangeText={desc => setInputState(desc)} placeholder="informe o nome do Pokemon" style={styles.input} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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
        color: '#fff',
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
        position: 'absolute',
        bottom: 5,
        marginTop: 20,
        width: '90%',
        margin: 20,
        height: 30,
        backgroundColor: '#FFF',
        elevation: 5,
        borderRadius: 6,
        fontSize: 16,
        paddingLeft: 10
    }
})