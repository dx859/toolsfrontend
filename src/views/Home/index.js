import React from 'react';
import store from 'store';
import reducer from './reducer';

store.injectReducer('home', reducer);

const Home = () => {
  return <>hello</>;
};

export default Home;
