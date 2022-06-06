import React from 'react';
import { createRoot } from 'react-dom/client';
import './css/style.min.css';
import App from './App';
import AdminPanel from './AdminPanel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// All page components
import Home from './pages/Home';
import Contact from './pages/Contact';
import Works from './pages/Works';

// all works
import Overview from './pages/works/Overview';
import GhPages from './pages/works/GhPages';
import LiveServer from './pages/works/LiveServer';
import GhRepo from './pages/works/GhRepo';
import MyJsonApis from './pages/works/MyJsonApis';


// All admin panel components
import Dashboard from './admin-panel/Dashboard';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/aftabwebdev/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='works' element={<Works />} >
            <Route index element={<Overview />} />
            <Route path='gh-pages' element={<GhPages />} />
            <Route path='live-server' element={<LiveServer />} />
            <Route path='gh-repo' element={<GhRepo />} />
            <Route path='my-json-api' element={<MyJsonApis />} />
          </ Route>
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route path='/aftabwebdev/admin' element={<AdminPanel /> }>
          <Route index element={<Dashboard /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
 