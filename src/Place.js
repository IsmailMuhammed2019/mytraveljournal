import React from 'react'

const Place = (props) => {
  return (
    <div>
      <div className='image_div'>
      <img src={`./imgs/${props.img}`} alt=" "/>
      </div>
      <div className='detail'>
        <p><img src='./imgs/location.png' alt='icon'/> {props.location} <a href='${props.link'>view on Google Maps</a></p>
        <h2>{props.name}</h2>
        <p className='date'>{props.date}</p>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Place