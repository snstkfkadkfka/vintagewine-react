import React from 'react';
import './Shipping.scss';

function Shipping() {
  return (
    <div className='Shipping'>
      <article>
        <p>나이제한</p>
        <span>
          알코올성 음료를 주문하거나 받으려면 만 21세 이상이어야 합니다. <br />
          알코올성 음료 배송물은 "성인 서명" 스티커와 함께 발송되며, 배송 시 신원 확인을 요청하고 확인해야 합니다.
        </span>
      </article>
      <article>
        <p>날씨에 따른 배송지연</p>
        <span>
          극심한 날씨 기간에는 매주 초에 와인을 배송합니다. <br />
          운송업체 창고의 온도 조건을 통제할 수 없기 때문에 주문한 날에 배송물이 나가지 않을 수 있습니다.
        </span>
      </article>
      <article>
        <p><span>Fedex/Fedex Ground</span> 배송</p>
        <span>
          우리는 Fedex또는 Fedex Ground로 배송합니다. <br />
          가격에는 포장재가 포함됩니다. 추가 요금으로 보험을 이용할 수 있습니다.
        </span>
      </article>
      <article>
        <p>해안운송 추천</p>
        <span>
          겨울과 여름철에는 날씨 조건&#40;온도&#41;과 긴 배송 시간으로 인해 상품이 손상 될 수 있습니다. <br />
          해안운송으로 상품을 배송할 경우 일반적으로 더 빠르고 안전하며 운송요금도 더 저렴합니다.
        </span>
      </article>
      <article>
        <p>배송불가 지역</p>
        <span>
          Alabama, Alaska, Arkansas, Delaware, Kansas, Kentucky, Louisiana, Maine, Maryland, Massachusetts,
          Michigan, Mississippi, Montana, Nevada, New York, North Dakota, Oklahoma,
          Pennsylvania, Rhode Island, South Dakota, Tennessee, Utah, Vermont, Virginia, Wisconsin
        </span>
      </article>
    </div>
  )
}

export default Shipping;