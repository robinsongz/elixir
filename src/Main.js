import React from 'react';
import './Main.css';
import backgroundvid from './Videos/smoke.mov';

function Main() {
  return (
    <div className='main'>
        <video autoPlay muted loop className='bgVid'>
            <source src={ backgroundvid } type="video/mp4"/>
        </video>
      <h2 className="brand">iBUYPOWER</h2>
      <h1 className="title">Elixir Series</h1>
      <button className="videoButton">Watch Video</button>
    </div>
  );
}

export default Main;
