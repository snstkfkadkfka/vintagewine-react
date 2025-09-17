import React from 'react';
import Step from './Step.js';
import AromaIcons from './AromaIcons.js';
import FoodIcons from './FoodIcons.js';
import { RiShoppingCart2Line } from "react-icons/ri";
import './WineInformation.scss';

function WineInformation({wine}) {
  return (
    <div className='WineInformation'>
      <div className='wine-image'>
        <img src={wine.image} alt={wine.skrName} />
      </div>
      <div className='wine-text'>
        <span className='name-en'>{wine.enName}</span>
        <h2>{wine.krName}</h2>
        <span className='country'>{wine.countryName}</span>
        <p>{wine.price}<span>원</span></p>
        <Step className='wine-step' step={wine.step} />
        <div className='wine-icon-text'>
          <div className='wine-icons'>
            <article>
              <h4 className='aromatext'>아로마</h4>
              <div className='aroma-icon' >
                {wine.aroma.map((item, index)=>(
                  <AromaIcons key={index} icon={item}  />
                ))}
              </div>
            </article>
            <article>
              <h4 className='aromafood'>음식매칭</h4>
              <div className='food-icon'>
                {wine.food.map((item, index)=> (
                  <FoodIcons key={index} icon={item} />
                ))}
              </div>
            </article>
          </div>
          <div className='button'>
            <button>
              <p>와인 샐러에 담기</p>
              <RiShoppingCart2Line className='shop' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WineInformation;