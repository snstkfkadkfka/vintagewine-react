import React from 'react';
import InfoBoxItem from './InfoBoxItem.js';
import './InfoBox.scss';
import {InfoBoxData} from "../../components/icons/data/Datas.js"

function InfoBox() {
  return (
    <article className='InfoBox'>
      <div className='container inner'>
        {
          InfoBoxData.map((item, index)=>(
            <InfoBoxItem  key={item.id} item={item} delay={index * 100} />
          ))
        }

      </div>
    </article>
  )
}

export default InfoBox ;