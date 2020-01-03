import React from 'react';

import classes from './LoadingText.less';

const LoadingText = ({ tip = '加载中' }) => {
  return <div className={classes.loading}>{tip}</div>;
};

export default LoadingText;
