import React from 'react';
import './SearchBox.scss';
import { IoSearch } from "react-icons/io5";

function SearchBox({onSearchChange}) {
  const handleChange = (e) => {
    onSearchChange(e.target.value);
  }
  return (
    <div className='SearchBox'>
      <IoSearch className='search-icon' />
      <input 
        type='text' 
        className='search-input' 
        placeholder='통합검색'
        onChange={handleChange}
      ></input>
    </div>
  )
}

export default SearchBox;