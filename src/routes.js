import { lazy } from 'react';
import Poem from '@/views/Poem';

const Home = lazy(() => import('@/views/Home'));
const Article = lazy(() => import('@/views/Article'));

export default [
  {
    path: '/backend',
    exact: true,
    key: 'home',
    component: Home
  },
  {
    path: '/backend/article',
    key: 'articles',
    component: Article
  },
  {
    path: '/backend/poem',
    exact: true,
    key: 'Poem',
    component: Poem
  }
];
