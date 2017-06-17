export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_ADMIN_TODOS_REQUEST':
      return {
        ...state,
        loadingTodos: true
      };
    case 'GET_ADMIN_TODOS_SUCCESS':
      return {
        ...state,
        loadingTodos: false,
        todoItems: action.todos
      };
    case 'GET_ADMIN_TODOS_ERROR':
      return {
        ...state,
        loadingTodos: false,
        todoItems: null
      };
    default:
      return state;
  }
};
