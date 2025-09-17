import React, { useState } from 'react'
import { IoMenu, IoClose  } from "react-icons/io5";
import './MobileMenu.scss';
import { Link } from 'react-router';

function MobileMenu() {
  const [menuBnt,setMenuBnt] = useState(false);

  const toggleMenu =()=>{
    setMenuBnt(!menuBnt)
  }

  return (
    <article className='MobileMenu'>
      <button onClick={toggleMenu} className='menu-btn'>
        <IoMenu />
      </button>
      <nav className={menuBnt ? 'open':'clased'}>
        <button onClick={toggleMenu} className='close-btn'>
          <IoClose />
        </button>
        <ul>
          <li><span className='menu-fake'>회사소개</span></li>
          <li>
            <Link to="/winepage" onClick={toggleMenu}>와인 </Link>
          </li>
          <li><span className='menu-fake'>맥주 & 사이다</span></li>
          <li><span className='menu-fake'>선물</span></li>
          <li><span className='menu-fake'>기타주류</span></li>
          <li><span className='menu-fake'>문의하기</span></li>
        </ul>
        <Link to="/" className='imgLogo'  onClick={toggleMenu}></Link>
      </nav>
    </article>
  )
}

export default MobileMenu;