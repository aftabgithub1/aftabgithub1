import React from 'react';
import Dashboard from './admin-panel/Dashboard';
import { Outlet } from 'react-router-dom';

const AdminPanel = () => {
  return (
    <div className='admin-panel'>
      <Outlet />
    </div>
  )
}

export default AdminPanel
