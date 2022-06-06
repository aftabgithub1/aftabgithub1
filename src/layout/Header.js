import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';


const Header = () => {

  const navItems = [
    {id: 1, link: './', title: 'Home'},
    {id: 2, link: './works', title: 'Works'},
    {id: 3, link: './contact', title: 'Contact'}
  ];
  
  const documentBody = document.body.addEventListener('click', () => {
    const dropMenu = document.getElementById('nav-menu');
    dropMenu.classList.remove('display')
  });
  
  const openMenu = (e) => {
    e.stopPropagation();
    const dropMenu = document.getElementById('nav-menu');
    console.log(dropMenu);
    dropMenu.classList.toggle('display')
  }

  return (
    <header className="App-header container">
        <div className='navbar'>
          <div className="logo">
            <Link to='./'>
              <img src="https://raw.githubusercontent.com/aftabgithub1/images/main/Logo/aftabwebdev_logo.png" alt="Logo" />
            </Link>
          </div>
          <nav id='nav-menu'>
              <ul>
                {navItems.map(navItem => (
                  <li key={navItem.id}>
                    <NavLink activeclass='active' to={navItem.link}>{navItem.title}</NavLink>
                  </li>
                ))}
              </ul>
          </nav>
          <FaBars className='menu-bars' onClick={openMenu}/>
        </div>
    </header>
  )
}

export default Header
