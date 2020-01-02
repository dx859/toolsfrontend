import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '@/views/Home';

const Layout = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
    </Switch>
  );
};

export default Layout;
