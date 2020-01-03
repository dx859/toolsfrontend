import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';

import { renderRoutes } from 'react-router-config';
import routes from '@/routes';
import classes from './index.less';
import LoadingText from '@/components/Loading/LoadingText';

const Content = () => {
  return (
    <div className={classes.content}>
      <Suspense fallback={<LoadingText tip="模块加载中..." />}>
        <Switch>{renderRoutes(routes)}</Switch>
      </Suspense>
    </div>
  );
};

export default Content;
