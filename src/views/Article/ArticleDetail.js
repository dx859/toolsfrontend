import React from 'react';
import { useDataApi } from '@/hooks/useDataApi';
import api from '@/api';
import { Card } from 'antd';

import classes from './ArticleDetail.less';

const ArticleDetail = ({ match }) => {
  let {
    state: { data, isLoading }
  } = useDataApi({ url: api.postDetail + `/${match.params.id}`, initialData: {} });

  return (
    <Card bordered={false} loading={isLoading} className={classes.article}>
      {data.content}
    </Card>
  );
};

export default ArticleDetail;
