import { createAction, createReducer } from '@/utils/reduxUtils';
import apiFetch from '@/utils/apiFetch';
import api from '@/api';

const fetchMenu = createAction('setting/fetchMenu');

export const getMenu = () => {
  return {
    types: fetchMenu,
    callAPI: () => apiFetch(api.getMenu)
  };
};

export default createReducer(
  {
    menu: [],
    loading: false
  },
  {
    [fetchMenu]: (state, action) => {
      state.menu = action.response;
    }
  }
);
