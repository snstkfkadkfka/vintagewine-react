import React, { useState } from 'react';
import {filters, drinks} from '../../components/icons/data/Datas';
import './winepage.scss'
import FiltersBtn from './FuktersBtn.js'
import WinePageItem from './WinePageItem.js';
import RangeValue from './RangeValue.js';
import Nopage from './NoPage.js';
import { useSearchParams } from 'react-router';
import { RiArrowLeftSFill, RiArrowRightSFill  } from "react-icons/ri";

function WinePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1;
  
  const [selectedType, setSelectedType] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const [maxPrice, setMaxPrice] =useState(500000)

  const fillteredDrinks = drinks.filter((item)=>{
    const type = item.type?.toLowerCase();
    const country = item.country?.toLowerCase();
    const selectedTypeLower = selectedType.toLowerCase();
    const selectedCountryLower = selectedCountry.toLowerCase();

    const typeMatch = 
      selectedTypeLower === 'all' || 
      selectedTypeLower === '' || 
      type === selectedTypeLower;

    const conutryMatch =
      selectedCountryLower === 'all' ||
      selectedCountryLower === '' ||
      country === selectedCountryLower;

    const itemPrice = Number(item.price.replace(/,/g, ''));
    const priceMatch = itemPrice <= maxPrice;

    return typeMatch && conutryMatch && priceMatch;
  });  

  const itemsPerPage = 12;
  const totalPages = Math.ceil(fillteredDrinks.length / itemsPerPage);
  const currentItems = fillteredDrinks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const pageGroupSize = 5;
  const currentGroup = Math.floor((currentPage - 1 ) / pageGroupSize);
  const startPage = currentGroup * pageGroupSize + 1;
  const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);

  const goToPage = (page) =>{
    if (page >= 1 && page <= totalPages){
      setSearchParams({page : page.toString()});
    }
  };


  return (
    <section className='WinePage'>
      <article>
        <div className='bg'></div>
        <h2>wine</h2>
        <p>와인</p>
      </article>
      <main>
        <div className='inner'>
          <FiltersBtn 
            allFilters = {filters} 
            onTypeChange = {setSelectedType}
            onCountryChange = {setSelectedCountry}
            selectedType = {selectedType}
            selectedCountry = {selectedCountry}
          />
          <RangeValue price = {maxPrice} setPrice = {setMaxPrice} />
          <div className='wine-list'>
            {currentItems.length > 0?(
              currentItems.map((item)=>(
                <WinePageItem key={`${item.id}-${item.krName}`} drinks={item} />
              ))
            ) : (
              <Nopage />
            )
          }
          </div>
        
          <div className='pageination'>
            <button
              onClick={()=> goToPage(startPage - 1)}
              disabled = {startPage === 1}
            >
              <RiArrowLeftSFill className='arrow' />
            </button>
            {[...Array(endPage - startPage + 1)].map((_, index) => {
              const pageNumber = startPage + index;
              return (
                <button
                  key={pageNumber}
                  className={currentPage === pageNumber ? 'active' : ''}
                  onClick={()=> goToPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              )
            })}
            <button 
              onClick={()=> goToPage(endPage + 1)}
              disabled={endPage >= totalPages}
            >
              <RiArrowRightSFill className='arrow' />
            </button>
          </div>
        </div>
      </main>
    </section>
  )
}

export default WinePage;