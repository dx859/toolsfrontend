import React from 'react';
import { useSelector } from 'react-redux';

const Hello = () => {
  const appName = useSelector(state => state.setting.appName);

  return <h1>Hello {appName} !</h1>;
};

export default Hello;
