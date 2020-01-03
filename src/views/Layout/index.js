import React from 'react';
import Header from '@/views/Layout/Header';
import Sidebar from '@/views/Layout/Sidebar';
import Content from '@/views/Layout/Content';

import classes from './index.less';

const Layout = () => {
  return (
    <>
      <Sidebar className={classes.left} />
      <div className={classes.right}>
        <Header className={classes.header} />
        <Content />
      </div>
    </>
  );
};

export default Layout;
