import React from 'react';
import { tabTitle } from '../../GeneralFunctions';

const LiveServer = () => {
  const pageTitle = "Live Server";
  tabTitle(pageTitle);
  
  return (
    <div>
      <h1 className='page-title'>{pageTitle}</h1>
    </div>
  )
}

export default LiveServer;
