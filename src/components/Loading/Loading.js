import React from 'react';
import { Spin } from 'antd';

import classes from './Loading.less';

const Loading = ({ loading }) => {
  if (!loading) return null;
  return (
    <div className={classes.loading}>
      <Spin />
    </div>
  );
};

export default Loading;
