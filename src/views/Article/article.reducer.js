import { createAction, createReducer } from '@/utils/reduxUtils';
import apiFetch from '@/utils/apiFetch';
import api from '@/api';

const [fetchstart, fetchend, fetcherror] = [
  'article/fetchstart',
  'article/fetchend',
  'article/fetcherror'
].map(a => createAction(a));

export const getMenu = () => {
  return {
    types: [fetchstart, fetchend, fetcherror],
    callAPI: () => apiFetch(api.getMenu)
  };
};

export default createReducer(
  {
    tree: [],
    loading: false
  },
  {
    [fetchstart]: (state, action) => {
      state.menu = action.response;
    }
  }
);
