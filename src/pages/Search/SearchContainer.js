import React from 'react';
import './SearchContainer.scss';

function SearchContainer({data}) {
  return (
    <div className='SearchContainer'>
      <div className='image'>
        <img src={data.image} alt={data.krName} />
      </div>
      <div className='conText'>
        <spen className="enName">{data.enName}</spen>
        <h4>{data.krName} <span>&#40;{data.type}&#41;</span></h4>
        <p className='country'>{data.countryName}</p>
        <p className="price">
          {data.price}<span>원</span> 
        </p>
      </div>
    </div>
  )
}

export default SearchContainer;