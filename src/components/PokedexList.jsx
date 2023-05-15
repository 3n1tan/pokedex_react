import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from 'styled-components';
import Card from './Card';

const PokedexList = () => {
    const [pokeInfo, setPokeInfo] = useState([]);
    const [searchBox, setSearchBox] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
            .then((response) => {
                const fetches = response.data.results.map((poke) => {
                    return axios.get(poke.url).then((response) => response.data);
                });
                Promise.all(fetches).then((response) => {
                    setPokeInfo(response);
                    setIsLoading(false);
                });
            });

    }, []);

    const searchBoxHandler = (e) => {
        setSearchBox(e.target.value)
    }

    const searchFilter = pokeInfo.filter(item => {
        return item.name.includes(searchBox)
    })

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <Container>
            <input placeholder='search pokemon by name' onChange={searchBoxHandler} />
            <div>
                {searchFilter.map((card) => (
                    <Card
                        key={card.name}
                        name={card.name}
                        image={card.sprites.other['official-artwork'].front_default} />

                ))}

            </div>

        </Container>
    );

}

export default PokedexList

const Container = styled.div`
    input {
        margin: 4rem 4rem;
        width: 200px;
        padding: 0.5rem;
        border-radius: 10px;
    }

    div {
        display: grid;
        grid-template-columns: repeat(6, 1fr)
    }
`