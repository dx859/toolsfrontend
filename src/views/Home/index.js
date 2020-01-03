import React from 'react';
import store from '@/store';
import reducer from './reducer';

store.injectReducer('home', reducer);

const Home = () => {
  return <div style={{ height: 1000 }}>hello</div>;
};

export default Home;
