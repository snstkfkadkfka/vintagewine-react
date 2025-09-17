import React from 'react';
import './Detail.scss';

function Detail({info}) {
  return (
    <div className='Detail'>
      <article>
        <p>생산자</p>
        <span>{info.producer}</span>
      </article>
      <article>
        <p>국가/생산지역</p>
        <span>{info.nation}</span>
      </article>
      <article>
        <p>주요품종</p>
        <span>{info.breed}</span>
      </article>
      {info?.alcohol && (
        <article>
          <p>알코올</p>
          <span>{info.alcohol}%</span>
        </article>
      )}
      <article>
        <p>음용온도</p>
        <span>{info.temperature}&#176;</span>
      </article>
    </div>
  )
}

export default Detail;