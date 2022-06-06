import React from 'react';
import { tabTitle } from '../../GeneralFunctions';

const Overview = () => {
  const pageTitle = "Overview";
  tabTitle(pageTitle);

  return (
    <div>
      <h1 className='page-title'>{pageTitle}</h1>
    </div>
  )
}

export default Overview
