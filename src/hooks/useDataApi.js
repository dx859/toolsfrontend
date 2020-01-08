import { useEffect, useReducer, useState } from 'react';

import apiFetch from '@/utils/apiFetch';

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      throw new Error();
  }
};

export function useDataApi({ url, initialData, initialQuery = {}, format } = {}) {
  const [query, setQuery] = useState(initialQuery);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData
  });

  useEffect(() => {
    dispatch({ type: 'FETCH_INIT' });
    apiFetch(url, query)
      .then(data => {
        if (typeof format === 'function') {
          data = format(data);
        }
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      })
      .catch(e => {
        dispatch({ type: 'FETCH_FAILURE' });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, JSON.stringify(query)]);

  return { state, setQuery };
}
