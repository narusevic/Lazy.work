import { push } from 'react-router-redux';
import storage from '../storage/appStorage';
import utils from '../utils';

const { api } = utils;

export const getAppTodos = () => (dispatch) => {
  dispatch({ type: 'GET_TODOS_REQUEST' });

  api
    .get('/api/todos')
    .then((response) => {
      if (response.ok) {
        dispatch({
          type: 'GET_TODOS_SUCCESS',
          appTodos: response.data
        });
      }
    });
};

export const getAdminTodos = () => (dispatch) => {
  dispatch({ type: 'GET_ADMIN_TODOS_REQUEST' });

  api
    .get('/api/admin/todos')
    .then((response) => {
      if (response.ok) {
        dispatch({
          type: 'GET_ADMIN_TODOS_SUCCESS',
          todos: response.data
        });
      } else {
        dispatch({ type: 'GET_ADMIN_TODOS_ERROR' });
      }
    });
};

export const addTodo = title => (dispatch) => {
  dispatch({ type: 'ADD_TODO_REQUEST' });

  api
    .post('/api/todos', { title })
    .then((response) => {
      dispatch({
        type: 'ADD_TODO_SUCCESS',
        todo: response.data
      });
    });
};

export const removeTodo = id => (dispatch) => {
  dispatch({ type: 'REMOVE_TODO_REQUEST' });

  api
    .$delete(`/api/todos/${id}`)
    .then((response) => {
      if (!response.ok) return;
      dispatch({
        type: 'REMOVE_TODO_SUCCESS',
        id
      });
    });
};

export const updateTodo = todoItem => (dispatch) => {
  const { id, ...body } = todoItem;

  api
    .put(`/api/todos/${id}`, body)
    .then(() => {
      dispatch({
        type: 'UPDATE_TODO_SUCCESS',
        todoItem
      });
    });
};

export const changeColorRequest = colorHexCode => (dispatch, getState) => {
  dispatch({ type: 'SETTINGS_LOADING' });
  const currentSettings = getState().appSettings;

  storage
    .updateAppSettings({ ...currentSettings, loading: false, appColor: colorHexCode })
    .then((response) => {
      dispatch({ type: 'UPDATE_SETTINGS', appSettings: response });
    });
};

export const getAppSettings = () => (dispatch) => {
  dispatch({ type: 'SETTINGS_LOADING' });
  storage
    .getAppSettings()
    .then((response) => {
      dispatch({
        type: 'UPDATE_SETTINGS',
        appSettings: response
      });
    });
};

export const register = body => (dispatch) => {
  dispatch({ type: 'REGISTER_REQUEST' });
  api
    .post('/api/account/register', body)
    .then((response) => {
      if (response.ok) {
        dispatch({ type: 'REGISTER_SUCCESS' });
        dispatch(push('/login'));
      } else {
        dispatch({
          type: 'REGISTER_ERROR',
          error: response.data.errorMessage || JSON.stringify(response.data)
        });
      }
    });
};

export const getUserInfo = (dispatch) => {
  dispatch({ type: 'GET_USER_INFO_REQUEST' });
  api
    .get('/api/account/me')
    .then((response) => {
      if (response.ok) {
        dispatch({
          type: 'GET_USER_INFO_SUCCESS',
          payload: response.data
        });
      } else {
        dispatch({ type: 'GET_USER_INFO_ERROR' });
      }
    });
};

export const login = body => (dispatch) => {
  dispatch({ type: 'LOGIN_REQUEST' });
  api
    .post('/api/account/login', body)
    .then((response) => {
      if (response.ok) {
        dispatch({ type: 'LOGIN_SUCCESS' });
        dispatch(push('/'));
        dispatch(getUserInfo);
      } else {
        dispatch({
          type: 'LOGIN_ERROR',
          error: response.data.errorMessage || JSON.stringify(response.data)
        });
      }
    });
};

export const logout = (dispatch) => {
  dispatch({ type: 'LOGOUT_REQUEST' });
  api
    .post('/api/account/logout')
    .then((response) => {
      if (response.ok) {
        dispatch({ type: 'LOGOUT_SUCCESS' });
      } else {
        dispatch({ type: 'LOGOUT_ERROR' });
      }
    });
};
