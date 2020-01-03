import { createAction, createReducer } from '@/utils/reduxUtils';
import apiFetch from '@/utils/apiFetch';
import api from '@/api';

const [fetchstart, fetchend, fetcherror] = [
  'user/fetchstart',
  'user/fetchend',
  'user/fetcherror'
].map(a => createAction(a));

export const setUser = createAction('user/setUser', 'user');

export const getUser = () => {
  return {
    types: [fetchstart, fetchend, fetcherror],
    callAPI: () => apiFetch(api.getUser)
  };
};

export const fetchLogout = createAction('user/fetchLogout');

export const logout = () => {
  return {
    types: fetchLogout,
    callAPI: () => apiFetch(api.logout)
  };
};

export default createReducer(
  {
    isLoaded: false,
    isFetching: false,
    isLogin: false,
    id: '',
    username: '',
    email: ''
  },
  {
    [setUser]: (state, action) => Object.assign(state, action.user, { isLogin: true }),
    [fetchstart]: state => (state.isFetching = true),
    [fetchend]: (state, action) =>
      Object.assign(state, action.response, { isFetching: false, isLoaded: true, isLogin: true }),
    [fetcherror]: (state, action) => {
      state.isFetching = false;
      state.isLoaded = true;
      state.isLogin = false;
    },
    [fetchLogout]: (state, action) =>
      Object.assign(state, { isLogin: false, id: '', username: '', email: '' })
  }
);
