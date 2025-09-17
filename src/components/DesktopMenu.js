import React from 'react';
import './DesktopMenu.scss';
import { Link, NavLink } from 'react-router';
import iconMap from './icons/Icons';

function DesktopMenu() {
    const activeStyle = {
    color: 'orange'
  };
  return (
      <nav>
        <ul className='inner'>
          <li><span className='menu-fake'>회사소개</span></li>
          <li>
            <Link to="/winepage"> 와인 </Link>
          </li>
          <li><span className='menu-fake'>맥주 & 사이다</span></li>
          <li><Link className='logo' to={'/'}><h1><img src={iconMap.logo} alt='로고' /></h1></Link></li>
          <li><span className='menu-fake'>선물</span></li>
          <li><span className='menu-fake'>기타주류</span></li>
          <li><span className='menu-fake'>문의하기</span></li>
        </ul>
      </nav>
  )
}

export default DesktopMenu;