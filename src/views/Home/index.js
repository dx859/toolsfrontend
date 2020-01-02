import React from 'react';
import store from 'store';
import reducer from './reducer';
import { Button, DatePicker } from 'antd';

store.injectReducer('home', reducer);

const Home = () => {
  return (
    <>
      <Button icon="search" type="primary">
        按钮
      </Button>
      <DatePicker />
    </>
  );
};

export default Home;
