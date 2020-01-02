import React from 'react';
import Header from '@/views/Layout/Header';
import Sidebar from '@/views/Layout/Sidebar';
import Content from '@/views/Layout/Content';

import classes from './index.less';

const styleString = `
html,body,#root {height: 100%}
#root {
  display: flex;

}
`;
const Layout = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styleString }} />
      <Sidebar className={classes.left} />
      <div className={classes.right}>
        <Header />
        <Content />
      </div>
    </>
  );
};

export default Layout;
