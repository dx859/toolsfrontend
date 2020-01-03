import React, { useEffect } from 'react';

import * as classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { getMenu } from '@/stores/setting';

import classes from './Sidebar.less';
import { Icon } from 'antd';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  background: '#5b9bf2'
};

const Sidebar = ({ className }) => {
  const dispatch = useDispatch();
  const menu = useSelector(state => state.setting.menu);

  useEffect(() => {
    dispatch(getMenu());
  }, [dispatch]);

  return (
    <aside className={classnames(className, classes.aside)}>
      <div className={classes.title}>
        <img
          width={30}
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          alt=""
        />
        <span className={classes.txt}>DX Blog</span>
      </div>
      <div style={{ marginTop: 10 }}>
        {menu.map(g => {
          return (
            <div key={g.id}>
              <div className={classes.item}>
                <Icon type={g.icon} style={{ fontSize: 20 }} />
                <span style={{ marginLeft: 5, display: 'inline-block', verticalAlign: 'top' }}>
                  {g.name}
                </span>
              </div>
              {g.children.map(item => {
                return (
                  <NavLink
                    exact={!!item.exact}
                    activeStyle={activeStyle}
                    to={item.path}
                    className={classes.link}
                    key={item.id}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
