import React, { useState } from 'react';
import { Card, Input, List } from 'antd';
import PageContent from '@/components/PageContent';

import api from '@/api';
import { useDataApi } from '@/hooks/useDataApi';

const Poem = () => {
  const [{ word, author, title }, setState] = useState({
    word: '',
    author: '',
    title: ''
  });

  const {
    state: {
      data: { list, pageSize, total, page },
      isLoading
    },
    setQuery
  } = useDataApi({
    url: api.poemList,
    initialData: { list: [], page: 1, pageSize: 10 },
    initialQuery: { word, author, title }
  });

  function changeValue(e) {
    let { name, value } = e.target;
    setState({ word, author, title, [name]: value });
  }

  function searchValue() {
    setQuery({ page: 1, word, author, title });
  }

  return (
    <PageContent>
      <Card bordered={false} style={{ marginBottom: 24 }}>
        <Input.Search
          placeholder="作者"
          style={{ width: 300, marginRight: 10 }}
          name="author"
          value={author}
          onChange={changeValue}
          onSearch={searchValue}
        />
        <Input.Search
          placeholder="标题"
          name="title"
          value={title}
          onChange={changeValue}
          onSearch={searchValue}
          style={{ width: 300, marginRight: 10 }}
        />
        <Input.Search
          placeholder="内容"
          name="word"
          value={word}
          onChange={changeValue}
          onSearch={searchValue}
          style={{ width: 300, marginRight: 10 }}
        />
      </Card>
      <Card bordered={false}>
        <List
          loading={isLoading}
          itemLayout="vertical"
          dataSource={list}
          pagination={{
            showTotal: (total, range) => `共${total}条记录`,
            current: page,
            total,
            onChange: page => {
              setQuery({ word, author, title, page });
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
