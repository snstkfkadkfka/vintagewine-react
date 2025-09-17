import React from 'react';
import './IconsStyle.scss';

function AromaIcons({icon}) {

  return (
    <div className='AromaIcons'>
      <article>
        <p>{icon.icon}</p>
        <span style={{whiteSpace:'pre-line'}}>{icon.name}</span>
      </article>
    </div>
  )
}

export default AromaIcons;