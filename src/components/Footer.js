import React from 'react';
import './Footer.scss';
import { RiInstagramFill ,RiTwitterFill } from "react-icons/ri";
import { FaCcAmex, FaCcVisa, FaCcApplePay, FaCcDinersClub, FaCcDiscover, FaGooglePay, FaCcMastercard, } from "react-icons/fa6";


function Footer() {
  return (
    <section id='Footer'>
      <div className='inner'>
        <article className='left'>
          <nav>
            <h2>INFORMATION</h2>
            <ul>
              <li className='fake-menu'><p>회사소개</p></li>
              <li className='fake-menu'><p>이용약관</p></li>
              <li className='fake-menu'><p>배송 밎 반품</p></li>
              <li className='fake-menu'><p>문의하기</p></li>
              <li className='fake-menu'><p>쿠키 및 개인정보 보호</p></li>
            </ul>
          </nav>
          <div className='copyright'>
            <p>Vintage Wine Merchants</p>
            <p>377 Santana Row, Suite 1135</p>
            <p>San Jose, CA 95128</p>
            <a href="tel:408-260-1115">
              <span>
                Tel: 408-260-1115
              </span> 
            </a>
            <p>&copy;2025, Vintage Wine Merchants</p>
          </div>
        </article>
        <article className='right'>
          <div className='sns'>
            <h2>SNS</h2>
            <ul>
              <li>
                <a href='https://x.com/vintagewinesr' target='_blank' rel="noreferrer"><RiTwitterFill /></a>
              </li>
              <li>
                <a href='https://www.instagram.com/vintagewinesr/#' target='_blank' rel="noreferrer"><RiInstagramFill /></a>
              </li>
            </ul>
          </div>
          <div className='payments'>
            <h2>PAYMENTS</h2>
            <ul>
              <li><FaCcAmex  title='American Express' /></li>
              <li><FaCcVisa  title='Visa'/></li>
              <li><FaCcApplePay title='Apple Pay' /></li>
              <li><FaCcDinersClub title='Diners Club' /></li>
              <li><FaCcDiscover title='Discover' /></li>
              <li><FaGooglePay title='Google Pay' /></li>
              <li><FaCcMastercard title='Mastercard' /></li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Footer;