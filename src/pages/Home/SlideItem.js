import React from 'react';
import './SlideItem.scss';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router';

function SlideItem({item}) {
  return (

    <div className='SlideItem'
    >
      <div className='content'>
        <div className='slideImg'>
          <img src={item.image} alt={item.krName} />
        </div>
        <div className='text'>
          <h3>
            {item.egName}
          </h3>
          <span> &#40;{item.krName}&#41;</span>
          <p style={{ whiteSpace: 'pre-line' }}>
            {item.explanation}
          </p>
          <div className="hashtags">
            {item.hashtag.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))
            }
          </div>
          {item.id === 1 ? (
            <button className='btn2'>
              <Link to="/winepage">
                {item.button}
                <IoIosArrowForward className='arrow' />
              </Link>

            </button>
          ):(
          <button className='btn2'>
            {item.button}
            <IoIosArrowForward className='arrow' />
            </button>
          )}
        </div>
      </div>
    </div>

  )
}

export default SlideItem;