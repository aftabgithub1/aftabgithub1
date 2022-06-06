import React from 'react';
import { tabTitle } from '../../GeneralFunctions';

const GhRepo = () => {
  const pageTitle = "Github Repository";
  tabTitle(pageTitle);
  
  return (
    <div>
      <h1 className='page-title'>{pageTitle}</h1>
    </div>
  )
}

export default GhRepo;
