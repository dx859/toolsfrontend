import React, { useEffect } from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import Login from '@/views/Login';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getUser } from '@/stores/user';
import Loading from '@/components/Loading';
import Layout from '@/views/Layout';

function App() {
  const dispatch = useDispatch();
  let isLoginPath = useRouteMatch('/login');

  const { isLoaded, isLogin } = useSelector(
    state => ({ isLoaded: state.user.isLoaded, isLogin: state.user.isLogin }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if (!isLoaded) {
    return <Loading />;
  }
  if (isLogin && isLoginPath) {
    return <Redirect to="/home" />;
  } else if (!isLogin && !isLoginPath) {
    return <Redirect to="/login" />;
  }

  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/login" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Layout} />
    </Switch>
  );
}

export default App;
