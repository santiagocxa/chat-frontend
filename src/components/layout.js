import React from 'react';
import '../assets/styles/layout.css';

const Layout = (props) => {
  return (
    <div className='Layout'>
      <div className='Layout-container'>{props.children}</div>
    </div>
  );
};

export default Layout;
