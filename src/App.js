import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [weight, setWeight] = useState();
  const [name, setName] = useState("");
  const [moves, setMoves] = useState();
  const [abilities, setAbilities] = useState();
  const [height, setHeight] = useState();
  const [species, setSpecies] = useState();
  const [base, setBase] = useState();
  const [pname, setPname] = useState("");

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setMoves(res.data.moves.length);
        setWeight(res.data.weight);
        setAbilities(res.data.abilities.length);
        setHeight(res.data.height);
        setSpecies(res.data.species.name);
        setBase(res.data.base_experience);
    }
    getData();
  }, [name]);

  return (
    <>
      <div className='title'>
        <h1>FindPoke</h1>
      </div>
      <div className="content">

        <h3>Search Pokemon by name</h3>
        <input type="text" value={pname} onChange={(e) => {
          setPname(e.target.value);
        }} />
        <br />
        <button className='btn btn-primary' onClick={() => {
          setName(pname.toLowerCase());
        }}>Submit </button>

        {name !== "" ?
          <div className="cards">
          <div className="card" style={{ width: '18rem' }}>
            <div class="card-body">
              <h2 class="card-title">{name}</h2>
              <div className="list">
                <ul type='none'>
                  <li>Moves: {moves}</li>
                  <li>Weight: {weight}</li>
                  <li>Abilities: {abilities}</li>
                </ul>
                <ul type='none'>
                  <li>Height: {height}</li>
                  <li>Species: {species}</li>
                  <li>Base Experience: {base}</li>
                </ul>
              </div>
            </div>
          </div>
        </div> : null
        }
       
      </div>
    </>
  )
}

export default App;
