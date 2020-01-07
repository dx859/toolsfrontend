import React, { useState } from 'react';
import { Card, Input, List } from 'antd';
import PageContent from '@/components/PageContent';

import api from '@/api';
import { useDataApi } from '@/hooks/useDataApi';

const Poem = () => {
  const [{ word, author, title, page }, setState] = useState({
    word: '',
    author: '',
    title: '',
    page: 1
  });
  const { data, isLoading } = useDataApi(
    api.poemList,
    { list: [], page: 1, pageSize: 10 },
    { page, word, author, title }
  );

  const { list, pageSize, total } = data;

  return (
    <PageContent>
      <Card bordered={false} style={{ marginBottom: 24 }}>
        <Input.Search
          placeholder="作者"
          style={{ width: 300, marginRight: 10 }}
          onSearch={author => {
            setState({ word, author, title, page: 1 });
          }}
        />
        <Input.Search
          placeholder="标题"
          onSearch={title => {
            setState({ word, author, title, page: 1 });
          }}
          style={{ width: 300, marginRight: 10 }}
        />
        <Input.Search
          placeholder="内容"
          onSearch={word => {
            setState({ word, author, title, page: 1 });
          }}
          style={{ width: 300, marginRight: 10 }}
        />
      </Card>
      <Card bordered={false}>
        <List
          loading={isLoading}
          itemLayout="vertical"
          dataSource={list}
          pagination={{
            current: page,
            total,
            onChange: page => {
              setState({ word, author, title, page });
            },
            pageSize
          }}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta title={item.title} description={item.author} />
              {item.content}
            </List.Item>
          )}
        />
      </Card>
    </PageContent>
  );
};

export default Poem;
