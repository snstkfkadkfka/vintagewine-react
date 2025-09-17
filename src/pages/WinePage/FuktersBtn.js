import React, { useEffect, useState } from 'react';
import './FuktersBtn.scss';

function FuktersBtn({
  allFilters, 
  onTypeChange, 
  onCountryChange, 
  selectedType, 
  selectedCountry
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(()=>{
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize',handleResize)
  },[]);

  return (
    <div className='FuktersBtn'>
      <div className='type'>
        <h3>종류별</h3>
        { isMobile ? (
          <select
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
          >
            <option value="">종류별</option>
            {allFilters.type.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
            ))}
          </select>
        ) : (
          allFilters.type.map((item)=>(
            <button 
              key={item.id} 
              value={item.id} 
              onClick={()=> onTypeChange(item.id)}
              className={selectedType === item.id ? 'active' : '' }
            >
              {item.name}
            </button>
          ))
        )}
      </div>
      
      <div className='country'>
        <h3>국가별</h3>
        <div className='buttonAll'>
        {isMobile ?(
          <select
            value={selectedCountry}
            onChange={(e) => onCountryChange(e.target.value)}
          >
            <option value="" >국가별</option>
            {allFilters.country.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        ):(
          allFilters.country.map((item)=>(
              <button 
                key={item.id} 
                value={item.id} 
                onClick={()=> onCountryChange(item.id)}
                className={selectedCountry === item.id ? 'active' : ''}
              >
                {item.name}
              </button>
          ))
        )}
        </div>
      </div>
    </div>
  );
}

export default FuktersBtn;