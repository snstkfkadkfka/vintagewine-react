import React, { useState } from 'react';
import Detail from './Detail.js';
import Shipping from './Shipping.js';
import Tasting from './Tasting.js';
import Dictionary from './Dictionary.js';
import './Taps.scss';

function Taps({data}) {
  const [activeTab, setActiveTab] = useState('detail');

  const renderContent = () => {
    switch (activeTab) {
      case 'detail' : return <Detail info = {data.information}/>;
      case 'shipping' : return <Shipping />;
      case 'tasting' : return <Tasting note = {data.note} />;
      case 'dictionary' : return <Dictionary data = {data} />;
      default: return null;
    }
  };

  return (
    <div className='Taps'>
      <div className='tap-btn'>
        <button onClick={()=>setActiveTab('detail')} className={activeTab === 'detail' ? 'active' : ''} >상세정보</button>
        <button onClick={()=>setActiveTab('shipping')} className={activeTab === 'shipping' ? 'active' : ''} >배송정책</button>
        <button onClick={()=>setActiveTab('tasting')}  className={activeTab === 'tasting' ? 'active' : ''} >테이스팅노트</button>
        <button onClick={()=>setActiveTab('dictionary')}  className={activeTab === 'dictionary' ? 'active' : ''} >와인사전</button>
      </div>
      <div className='content'>
        {renderContent()}
      </div>
    </div>
  )
}

export default Taps;