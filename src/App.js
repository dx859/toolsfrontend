import React, { useEffect } from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getUser } from '@/stores/user';
import { Loading } from '@/components/Loading';
import Layout from '@/views/Layout';
import Login from '@/views/Login';

function App() {
  const dispatch = useDispatch();
  let isLoginPath = useRouteMatch('/backend/login');

  const { isLoaded, isLogin } = useSelector(
    state => ({ isLoaded: state.user.isLoaded, isLogin: state.user.isLogin }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getUser());
    // dispatch(getMenu());
  }, [dispatch]);

  if (!isLoaded) {
    return <Loading />;
  }

  if (isLogin && isLoginPath) {
    return <Redirect to="/backend" />;
  } else if (!isLogin && !isLoginPath) {
    return <Redirect to="/backend/login" />;
  }

  return (
    <Switch>
      <Route path="/backend/login" component={Login} />
      <Route path="/backend" component={Layout} />
      <Redirect to="/backend" />
    </Switch>
  );
}

export default App;
