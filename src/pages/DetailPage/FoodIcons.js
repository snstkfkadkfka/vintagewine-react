import React from 'react';
import './IconsStyle.scss';

function FoodIcons({icon}) {
  return (
    <div className='FoodIcons'>
      <article>
        <p>{icon.icon}</p>
        <span style={{whiteSpace:'pre-line'}}>{icon.name}</span>
      </article>
    </div>
  )
}

export default FoodIcons;