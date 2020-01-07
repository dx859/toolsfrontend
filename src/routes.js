import { lazy } from 'react';
import Poem from '@/views/Poem';

const Home = lazy(() => import('@/views/Home'));

export default [
  {
    path: '/backend',
    exact: true,
    key: 'Home',
    component: Home
  },
  {
    path: '/backend/poem',
    exact: true,
    key: 'Poem',
    component: Poem
  }
];
