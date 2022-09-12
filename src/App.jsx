import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import MainCard from './components/MainCard'
import Search from './components/Search'
import Title from './components/Title'


function App() {


  return (
    <div className="App">
     
        <Hero />
        <Title />
        <MainCard />

    </div>
  )
}

export default App
