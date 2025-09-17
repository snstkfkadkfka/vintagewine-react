import React from 'react'
import './InfoBoxItem.scss'

function InfoBoxItem({item, delay}) {
  return (
    <div className='InfoBoxItem' data-aos="fade-up" data-aos-delay={delay} data-aos-duration="800">
      <div className='img' 
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${item.image})`,
        }}
      ></div>
      <div className='content'>
        <h2>{item.title}</h2>
        <p><span>{item.subExplanation}</span>{item.explanation}</p>
      </div>
    </div>
  )
}

export default InfoBoxItem