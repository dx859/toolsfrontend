import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '@/views/Login';
import apiFetch from '@/utils/apiFetch';

function App() {
  useEffect(() => {
    // apiFetch();
  });

  return (
    <Switch>
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;
