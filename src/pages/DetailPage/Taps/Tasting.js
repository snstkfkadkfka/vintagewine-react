import React from 'react';
import './Tasting.scss';

function Tasting({note}) {
  return (
    <article className='Tasting'>
      <p className='date'>{note.date}</p>
      <div className='title'>
        <p>{note.title}</p>
        <span>{note.explanation}</span>
      </div>

    </article>
  )
}

export default Tasting;