import React from 'react'

//importing screen stylings
import '../styles/screens/home.css'

import { Image } from '../components/'

import Hero from '../patterns/showcase/hero'

import homebird from '../assets/images/homebird.svg'

const Home = () => {
    return (
        <div className="home">
           <Hero />
           <div className="block-right"><Image src={homebird} /></div>
        </div>
    )
}

export default Home
