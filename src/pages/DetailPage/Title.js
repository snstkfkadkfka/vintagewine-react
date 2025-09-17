import React from 'react';
import { WiStars } from "react-icons/wi";
import './Title.scss';

function Title({title}) {
  return (
    <div className='Title'>
      <div className='title-text'>
        <WiStars className='star' />
        <p>{title}</p>
        <WiStars className='star' />
      </div>
    </div>
  )
}

export default Title;