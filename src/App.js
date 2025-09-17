import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import WinePage from './pages/WinePage/WinePage';
import DetailPage from './pages/DetailPage/DetailPage';
import Search from './pages/Search/Search';
import Aos from 'aos';
import './App.scss';
import "aos/dist/aos.css"; 

function App() {
  useEffect(() => {
    Aos.init({
      duration: 500, // 기본 애니메이션 지속시간 (ms)
      once: false,     // 한 번만 실행할지 여부
    });
  }, []);

  const [isSearchOpen, setIsSearchOpen] = useState(false)
  return (
    <div className='App'>
      <Header onSearchClick={() => setIsSearchOpen(true)} />
      {isSearchOpen && <Search onClose={() => setIsSearchOpen(false)} />}

      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/winepage'} element={<WinePage />} />
        <Route path={'/winepage/:id'} element={<DetailPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;