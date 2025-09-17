import React, { useEffect, useState } from 'react';
import { IoSearch, IoPerson, IoCartSharp } from "react-icons/io5";
import './Header.scss';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import { useLocation } from 'react-router';

function Header({onSearchClick}) {
  const [isMobile,setIsMobile] = useState(window.innerWidth < 1200);
  const location = useLocation();
  
  const isWinePage = location.pathname === '/winepage' || /^\/winepage\/\d+$/.test(location.pathname);


  useEffect(()=>{
    const handleResize = () =>{
      setIsMobile(window.innerWidth < 1200);
    };
    window.addEventListener('resize',handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[]);

  const headerClasName = `
    ${isMobile ? 'mobile' : 'desktop'} 
    ${isWinePage ? 'wine-style' : ''}
  `.trim();

  return (
    <header id='Header' className={headerClasName}>
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
      <article className='top-bar'>
        <ul>
          <li className='search' onClick={onSearchClick}>
            <IoSearch />
          </li>
          <li className='fake-topBar'>
            <IoPerson />
          </li>
          <li className='fake-topBar'>
            <IoCartSharp />
          </li>
        </ul>
      </article>
    </header>
  )
}

export default Header;