import React, { useState } from 'react';
import { Icon } from 'antd';

import classes from './Treelist.less';
import { NavLink } from 'react-router-dom';
import * as classnames from 'classnames';

const TreeList = ({ data, level = 1 }) => {
  const [expand, setExpand] = useState(true);

  const itemStyle = { paddingLeft: level * 12 };

  return data.map(item => {
    return (
      <div key={item.id}>
        {item.children ? (
          <div
            className={classes.item}
            style={itemStyle}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <Icon
              type="right"
              className={classnames(classes.icon, { [classes.iconClose]: !expand })}
            />
            {item.title}
          </div>
        ) : (
          <NavLink
            style={itemStyle}
            activeClassName={classes.active}
            to={`/backend/article/${item.id}`}
            className={classes.item}
          >
            <span className={classes.dot} />
            {item.title}
          </NavLink>
        )}
        {item.children && expand && <TreeList data={item.children} level={level + 1} />}
      </div>
    );
  });
};

export default TreeList;
