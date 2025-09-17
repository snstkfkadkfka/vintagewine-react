import React from 'react';
import './WinePageItem.scss';
import { RiShoppingCart2Line } from "react-icons/ri";
import { useNavigate } from 'react-router';

function WinePageItem({drinks}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`./${drinks.id}`)
  }

  return (
    <div className='WinePageItem' onClick={handleClick}>
      <div>
        <div className='wineImg'>
          <img src={drinks.image} alt={drinks.krName} />
        </div>
        <div className='text'>
          <span>{drinks.enName}</span>
          <h4>{drinks.krName}</h4>
          <div className='price'> 
            <p>{drinks.price}<span>원</span></p>
            <RiShoppingCart2Line className='shopIcon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WinePageItem;