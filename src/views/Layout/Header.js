import React, { memo, useCallback } from 'react';
import classnames from 'classnames';

import { Icon } from 'antd';

import classes from './Header.less';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/stores/user';

const Header = ({ className }) => {
  const username = useSelector(state => state.user.username);

  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <header className={classnames(className, classes.header)}>
      <div>
        <Icon type="menu-fold" className={classes.leftIcon} />
      </div>
      <div>
        <span style={{ marginRight: 10 }}>
          <Icon type="user" />
          <span style={{ verticalAlign: 2, marginLeft: 5 }}>{username}</span>
        </span>
        <span style={{ cursor: 'pointer' }} onClick={handleLogout}>
          <Icon type="logout" />
          <span style={{ verticalAlign: 2, marginLeft: 5 }}>退出</span>
        </span>
      </div>
    </header>
  );
};

export default memo(Header);
