import React from 'react';
import { Route } from 'react-router-dom';
import PageContent from '@/components/PageContent';

import classes from './index.less';
import ArticleDir from '@/views/Article/ArticleDir';
import ArticleDetail from '@/views/Article/ArticleDetail';

const Article = () => {
  return (
    <PageContent className={classes.page} style={{ height: '100%' }}>
      <ArticleDir />
      <Route path="/backend/article/:id" component={ArticleDetail} />
    </PageContent>
  );
};

export default Article;
