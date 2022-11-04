import React from 'react'
import data from './data'
import Place from './Place'
import './App.css'

const App = () => {
  const places = data.map(place => {
    return (<Place key={place.id} {...place} />)
  })
  return (
    <div>
      <div className='header'><img src="./imgs/globe.png" alt="globe"/> <h2>My Travel Journal</h2></div>
      <div className='place'>
        {places}
      </div>
    </div>
  )
}

export default App