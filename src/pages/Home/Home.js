import React from 'react';
import VideoComtent from './VideoComtent';
import GotoContent from './GotoContent';
import Slider from './Slider';
import InfoBox from './InfoBox';


function Home() {
  return (
    <section className='Home'>
      <VideoComtent />
      <GotoContent />
      <Slider />
      <InfoBox />
    </section>
  )
}

export default Home;
