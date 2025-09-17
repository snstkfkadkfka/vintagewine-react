import React, { useState } from 'react';
import './Search.scss';
import SearchBox from './SearchBox.js';
import SearchContainer from './SearchContainer.js';
import { IoClose  } from "react-icons/io5";
import { drinks } from '../../components/icons/data/Datas.js';
import { useNavigate } from 'react-router';

function Search({onClose}) {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const filteredDrinks = searchTerm.trim() === ''
    ? drinks.filter((item) => item.id === 1)
    :drinks.filter((item) => {
      const keyword = searchTerm.toLowerCase();
      return (
        item.krName.toLowerCase().includes(keyword) ||
        item.enName.toLowerCase().includes(keyword) ||
        item.type.toLowerCase().includes(keyword) ||
        item.countryName.toLowerCase().includes(keyword)
      );
    });
  return (
    <section className='Search'>
      <div className='popup'>
        <IoClose className='close' onClick={onClose}/>
        <h2>search</h2>

        <SearchBox className='search-box' onSearchChange={setSearchTerm} />
        
        <div className='search-container'>
          <h3>{searchTerm.trim === "" ? '추천 와인' : '검색 결과'}</h3>
          <div className='container' >
            {filteredDrinks.map((item)=>(
              <div
                key={item.id}
                onClick={()=>{
                  navigate(`/winepage/${item.id}`);
                  onClose();
                }}
              >
                <SearchContainer 
                  className='content' 
                  key={item.id} 
                  data={item} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Search;