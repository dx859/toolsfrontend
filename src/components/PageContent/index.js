import React from 'react';

import classes from './index.less';
const PageContent = ({ className, children, style }) => {
  className = classes.content + (className ? className : '');
  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};

export default PageContent;
