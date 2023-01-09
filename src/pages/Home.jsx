import React from 'react'
import FormHome from '../components/FormHome'
import "./styles/Home.css"

const Home = () => {
  return (
    <main className='home'>

        <img className='home_img' src="/images/img_pokedex.png" alt="" />
        <h2 className='home_subtitle'>Hi, trainer!</h2>
        <p className='home_text'>Give me your name to star!</p>

        <FormHome />

    </main>
  )
}

export default Home