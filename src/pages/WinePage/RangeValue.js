import React, { useState } from 'react';
import './RangeValue.scss';
function RangeValue({price, setPrice}) {

  const handleChange = (e) =>{
    setPrice(Number(e.target.value))
  }

  const percentage = (price / 500000 ) * 100;

  const sliiderStyle = {
    background: `linear-gradient(to right, #EDB9B9 0%, #EDB9B9 ${percentage}%, #fffafa ${percentage}%, #fffafa 100%)`
  }
  return (
    <div className='RangeValue' >
      <div className='rangeBar'>
        <h3>가격별</h3>
        <input 
          type='range' 
          id='rangeInput' 
          min="0" 
          max="500000" 
          value={price} 
          step="1"
          onChange={handleChange}
          style={sliiderStyle}
        />
      </div>
      <div className='priceBar'>{price.toLocaleString()}</div>
    </div>
  )
}

export default RangeValue;