import React, { useCallback, useRef } from 'react';

import classes from './index.less';
import { Button } from '@/components/Button';
import apiFetch from '@/utils/apiFetch';
import api from '@/api';

const Login = () => {
  const ref = useRef();

  const submit = useCallback(
    e => {
      e.preventDefault();

      apiFetch(api.login, {
        username: ref.current.username.value,
        password: ref.current.password.value
      }).then(data => {
        console.log(data);
      });
    },
    [ref]
  );

  return (
    <div className={classes.box}>
      <form ref={ref} className={classes.form} onSubmit={submit}>
        用户名：
        <input type="text" name="username" />
        <br />
        密　码：
        <input type="password" name="password" />
        <br />
        <Button>提交</Button>
      </form>
    </div>
  );
};

export default Login;
