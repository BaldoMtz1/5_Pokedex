import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./styles/Pokemon.css"

const Pokemon = () => {

  const [dataPokemon2, setdataPokemon2] = useState()

  const {id} =  useParams()

  useEffect(()=>{
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res => setdataPokemon2(res.data))
      .catch(err => console.log(err))
  },[])

  return (
    <main className='pokemon'>
      

      <section className='pokemonId'>

        <section className='pokemonId_header'></section>
        <img className='pokemonId_img' src={dataPokemon2?.sprites.other["official-artwork"].front_default} alt="" />
        <h3 className='pokemonId_id' >{dataPokemon2?.id}</h3>
        <h2 className='pokemonId_name' >{dataPokemon2?.name}</h2>
        <section className='pokemonId_features' >
          <div className='pokemonId_feature'>
            <p className='pokemonId_feature-name'>Weight</p>
            <p className='pokemonId_feature-value'>{dataPokemon2?.weight}</p>
          </div>
          <div className='pokemonId_feature' >
            <p className='pokemonId_feature-name'>Height</p>
            <p className='pokemonId_feature-value'>{dataPokemon2?.height}</p>
          </div>
        </section>

        <section className='pokemonId_info'>
          <div className='pokemonId_type'>
            <h4 className='pokemonId_type-title'>Types</h4>
            <div className='pokemonId_type-container'>
              {
                dataPokemon2?.types.map(type => <p className='pokemonId_type-value' key={type.type.name}>{type.type.name}</p> )
              }
              
            </div>
          </div>

            
          <div className='pokemonId_info-skills'>
            <h4 className='pokemonId_skill-title'>Abilities</h4>
            <div className='pokemonId_skills-container'>
              {
                dataPokemon2?.abilities.map(ability => <p key={ability.ability.url}>{ability.ability.name}</p> )
              }
            </div>
          </div>

        </section>

        <section className='pokemonId_stats'>
          <h3 className='pokemonId_stats-title'>Stats</h3>
          <div className='pokemonId_stat-container'>
            {/* dinamicamente */}
            {
              dataPokemon2?.stats.map(stat => (

            <div className='pokemonId_stat'>

              <div className='pokemonId_stat-header'>
                <p className='pokemonId_stat-name'>{stat.stat.name}</p>
                <p className='pokemonId_stat-value'>{stat.base_stat}</p>

              </div>

              <div className='pokemonId_stat-bar'>
                <div className='pokemonId_stat-barProgress'></div>
              </div>

            </div>
              ))
            }


          </div>

        </section>

      </section>
    </main>
  )
}

export default Pokemon