import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Works = () => {
  const sidebarToggle = (e) => {
    e.stopPropagation()
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    sidebar.classList.toggle('sidebar-toggle');
    content.classList.toggle('sidebar-toggle');
    
  }
  const sidebarRemove = () => {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    sidebar.classList.remove('sidebar-toggle');
    content.classList.remove('sidebar-toggle');
  }

  return (
    <div className='sidebar-container'>
      <div className='sidebar'>
        <ul>
          <li><h3>Categories</h3></li>
          <li><NavLink activeclass='active' to='./'>Overview</NavLink></li>
          <li><NavLink activeclass='active' to='gh-pages'>Github Pages</NavLink></li>
          <li><NavLink activeclass='active' to='live-server'>Live Server</NavLink></li>
          <li><NavLink activeclass='active' to='gh-repo'>Github Repositories</NavLink></li>
          <li><NavLink activeclass='active' to='my-json-api'>My JSON APIs</NavLink></li>
        </ul>
      </div>
      <div className='content' onClick={sidebarRemove}>
        <div className='sidebar-toggle-btn' onClick={sidebarToggle}>
          <span><FaBars /></span> <span> List</span></div>
        <Outlet />
      </div>
    </div>
  )
}

export default Works
