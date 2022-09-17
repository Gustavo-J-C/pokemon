import React, {useContext, createContext, useState} from 'react';

const PokeContext = createContext(null);

export default function Api({children}) {
    
    const [pokemon, setPokemon] = useState({});
    const [evolutions, setEvolution] = useState({})
    const [datas, setData] = useState({})
    const [chart, setChart] = useState({})

    return (
        <PokeContext.provider value={{pokemon, evolutions, datas, chart,setPokemon, setEvolution, setData, setChart}}>
            {children}
        </PokeContext.provider>
    )
}

export const PokeData = () => {
    return useContext(PokeContext)
}