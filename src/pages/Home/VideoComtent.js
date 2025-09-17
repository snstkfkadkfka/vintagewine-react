import React from 'react';
import './VideoComtent.scss';
import video from '../../components/icons/Icons';

function VideoComtent() {
  return (
    <article className='VideoComtent'>
      <video src={video.video} autoPlay muted loop></video>
    </article>
  )
}

export default VideoComtent;