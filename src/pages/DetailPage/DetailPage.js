import React from 'react';
import Title from './Title.js';
import WineInformation from './WineInformation.js';
import Taps from './Taps/Taps.js';
import {drinks} from '../../components/icons/data/Datas.js';
import { useParams } from 'react-router';
import './DetailPage.scss';


function DetailPage() {
  const { id } = useParams();
  const wine = drinks.find((item)=> item.id.toString() === id);

  if (!wine) {
    return <div>존재하지 않는 와인입니다.</div>
  }

  return (
    <section className='DetailPage'>
      <Title title = {wine.type} />
      <div className='inner'>
        <WineInformation wine = {wine} />
        <Taps  data = {wine}/>
      </div>
    </section>
  )
}

export default DetailPage;