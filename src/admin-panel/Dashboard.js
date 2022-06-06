import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='container'>
      <h1>Dashboard</h1>
      <Link to='/aftabwebdev'>Go home</Link>
    </div>
  )
}

export default Dashboard
