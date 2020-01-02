import React, { useCallback, useState } from 'react';
import { Button, Form, Icon, Input } from 'antd';

import apiFetch from '@/utils/apiFetch';
import api from '@/api';
import classes from './index.less';
import { useDispatch } from 'react-redux';
import { setUser } from '@/stores/user';
import { querystring } from '@/utils/urlUtils';
import browserHistory from '@/browserHistory';

const Login = ({ form, location }) => {
  const { getFieldDecorator } = form;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      form.validateFields((err, values) => {
        if (!err) {
          setLoading(true);
          apiFetch(api.login, values)
            .then(data => {
              setLoading(false);
              dispatch(setUser(data));
              let query = querystring(location.search);
              if (query.redirect) {
                browserHistory.push(query.redirect);
              } else {
                browserHistory.push('/home');
              }
            })
            .catch(e => {
              setLoading(false);
            });
        }
      });
    },
    [form, dispatch, location.search]
  );

  return (
    <div className={classes.box}>
      <Form onSubmit={handleSubmit} className={classes.form}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button loading={loading} type="primary" htmlType="submit" className={classes.button}>
            登陆
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form.create({ name: 'normal_login' })(Login);
