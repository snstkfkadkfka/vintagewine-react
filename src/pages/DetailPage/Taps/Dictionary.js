import React from 'react';
import './Dictionary.scss';

function Dictionary({data}) {
  return (
    <div className='Dictionary'>
      <article className='grape'>
        <h3>포도품종</h3>
        {data.dictionary.grape.map(item=>(
          <div className='breeds' key={item.breed}>
            <p>{item.breed}</p>
            <span>{item.text}</span>
          </div>
        ))}
      </article>
      <article className='production'>
        <h3>생산지역</h3>
        <div className='production-text'>
          <p>{data.dictionary.production.title}</p>
          <span>{data.dictionary.production.text}</span>
        </div>
      </article>
      <article className='producer'>
        <h3>생산자</h3>
        <div className='production-text'>
          <p>{data.dictionary.producer.title}</p>
          <span>{data.dictionary.producer.text}</span>
          <a href={data.dictionary.producer.web} target='_blank' rel="noreferrer">{data.dictionary.producer.web}</a>
        </div>
      </article>
    </div>
  )
}

export default Dictionary;