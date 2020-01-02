import React from 'react';
import store from 'store';
import reducer from './reducer';
import Hello from '@/components/Hello';

store.injectReducer('home', reducer);

const style = `
background: #ccc
`;

const Home = () => {
  return (
    <>
      <Hello />
    </>
  );
};

export default Home;
