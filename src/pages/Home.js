import React, { useEffect } from 'react';
import profilePic from '../images/aftab_pp_540px.jpg'

const Home = () => {
  document.title = 'Aftab Web Development';

  useEffect(() => {

  }, []);
  
  return (
      <div class='page'>
        <figure className='profile-picture'>
          <img src={profilePic} alt="" />
        </figure>
        <div style={{textAlign: 'center'}}>
          <h1>Hi! I am</h1>
          <h1 className='profile-name'>Aftab Ahmed</h1>
          <p style={{fontSize: "1.2rem"}}>I am a fullstack web developer. I have two years of experience in html, css, sass, javaScript, jQuery, php, laravel, and one year experience in React.</p>
        </div>
      </div>
  )
}

export default Home
