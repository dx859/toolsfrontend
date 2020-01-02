import React from 'react';
import { Spin } from 'antd';

const Loading = () => {
  return (
    <div style={{ textAlign: 'center', paddingTop: 30 }}>
      <Spin />
    </div>
  );
};

export default Loading;
