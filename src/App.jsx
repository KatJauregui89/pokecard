import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState({});
  const [isDecimeters, setIsDecimeters] = useState(true)
  const [isHectograms, setIsHectograms] = useState(true)

  let id = Math.floor(Math.random() * 600) + 1

  useEffect(() => {
    changePokemon()
  }, [])

  // console.log(pokemon);

  const changePokemon = () => {
    let id = Math.floor(Math.random() * 600) + 1
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(res => setPokemon(res.data))
  }

  return (
    <div className="App">
      <div className="card">
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
        <p> <span>weight:</span> {isHectograms ? pokemon.weight : pokemon.weight / 10} {isHectograms ? 'hectograms' : 'kilograms'}</p>
        {/* pokemon.height/10 -> metros */}
        <p> <span> height: </span> {isDecimeters ? pokemon.height : pokemon.height / 10} {isDecimeters ? 'decimeters' : 'meters'}</p>
        <p> <span> type: </span> {pokemon.types?.[0].type.name} </p>
        <button onClick={() => setIsDecimeters(!isDecimeters)}>Change height</button>
        <button onClick={() => setIsHectograms(!isHectograms)}>Change weight</button>
        <button onClick={changePokemon}>Change Pokemon</button>
      </div>
    </div>
  )
}

export default App
