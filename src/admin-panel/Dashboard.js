import React from 'react';
import { Link } from 'react-router-dom';
import DB from '../db.json';

const Dashboard = () => {
  DB.new_key = [];
  console.log(DB);

  return (
    <div className='container'>
      <h1>Dashboard</h1>
      <Link to='/aftabwebdev'>Go home</Link>
    </div>
  )
}

export default Dashboard
