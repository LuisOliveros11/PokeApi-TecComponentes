import './App.css';
import {useEffect, useState} from "react";
import Pokemon_Card from './components/Pokemon_Card.js';

function App() {
  const URL_PokeApi = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch(URL_PokeApi)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setPokemonList(data.results);
      });
    },[]);

  return (
    <div className="App">
      <div className='container'>
        <h1>
          POKEMONS
        </h1>
        <div className='row'>
          {pokemonList.map((pokemon, num) => (
              <Pokemon_Card name={pokemon.name} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${num+1}.png`} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
