import { lazy } from 'react';

const Home = lazy(() => import('@/views/Home'));

export default [
  {
    path: '/backend',
    exact: true,
    key: 'Home',
    component: Home
  }
];
