import React from 'react';
import './GotoContent.scss';

import { IoIosArrowForward } from "react-icons/io";
;

function GotoContent() {
  return (
    <article className='GotoContent'>
      <div className='inner'>
        <h2  data-aos="fade">
          우리 
          <strong>"THE VINTAGE WINE MERCHANTS"</strong>는 고객님을 위해  
          <span> 최고의 와인, 맥주,스피릿 ,리큐어등을 집접 선정하여 관리/보관하고 있습니다.</span>
        </h2>
        <figure>
          <div className='img'></div>
          <div className='img-description'>
            <h3>introduce</h3>
            <div className='textLight'>
              <figcaption>
                <p>1975년에 설립된 The Vintage Wine Merchants는 와인, 맥주, 에일, 스피릿을
                포함한 다양하고 흥미진진한 고품질 제품을 제공하는 독립 매장입니다.
                </p>
                <p>
                  The Vintage Wine Merchants는 모든 고객을 만족시키는 것을 목표로 합니다.
                </p>
                <p>따라서 모든 제품은 경영진이 특별히 선정하여 최고의 기준을 보장합니다.
                </p>
                <p>
                  아무리 희귀하고 이국적이며 이상하더라도, 우리는 당신이 가장 좋아하는 음료와
                  재회할 수 있도록 확실히 도울 것입니다. 두 매장 중 하나에 들러서 직원에게 물어
                  보세요.
                </p>
              </figcaption>
              <button className='goto-btn btn1'> 
                <p>위치 및 영업시간 바로가기</p>
                <IoIosArrowForward className='arrow' />
              </button>
            </div>
          </div>
        </figure>
      </div>
    </article>
  )
}

export default GotoContent;