import React from 'react';
import { tabTitle } from '../../GeneralFunctions';

const MyJsonApis = () => {
  const pageTitle = "My JSON APIs";
  tabTitle(pageTitle);
  
  return (
    <div>
      <h1 className='page-title'>{pageTitle}</h1>
    </div>
  )
}

export default MyJsonApis
