import React from 'react';
import { Card } from 'antd';
import classes from './index.less';
import { useDataApi } from '@/hooks/useDataApi';
import api from '@/api';
import TreeList from '@/views/Article/Treelist';

const ArticleDir = () => {
  const {
    state: { data, isLoading }
  } = useDataApi({
    url: api.postTreeList,
    initialData: []
  });

  return (
    <Card
      bordered={false}
      bodyStyle={{ padding: '24px 0' }}
      className={classes.dir}
      loading={isLoading}
    >
      <TreeList data={data} />
    </Card>
  );
};

export default ArticleDir;
