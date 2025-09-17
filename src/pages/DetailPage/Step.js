import React from 'react';
import './Step.scss';

function Step({step}) {
  return (
    <div className='Step'>
      <ul>
        <li><p>당도</p><img src={step.sugar} alt="당도" /></li>
        <li><p>산도</p><img src={step.acidity} alt="산도" /></li>
        <li><p>바디</p><img src={step.body} alt="바디" /></li>
        <li><p>타닌</p><img src={step.tannin} alt="타닌" /></li>
      </ul>

    </div>
  )
}

export default Step;