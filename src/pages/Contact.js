import React from 'react';
import { tabTitle } from '../GeneralFunctions';

const Contact = () => {
  tabTitle('Contact')
  
  return (
    <div class='page'>
      <h1 className='page-title'>Contact</h1>
      <p style={{fontSize: "1.2rem"}}>
        Email: aftab2060@gmail.com
      </p>

      <p style={{fontSize: "1.2rem"}}>
        Phone No: +8801720390878 (Bangladesh)
      </p>
    </div>
  )
}

export default Contact
