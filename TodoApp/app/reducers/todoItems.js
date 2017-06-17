let utilityIndex;

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO_REQUEST':
      return state;
    case 'ADD_TODO_SUCCESS':
      return [...state, action.todo];
    case 'REMOVE_TODO_REQUEST':
      return state;
    case 'REMOVE_TODO_SUCCESS':
      utilityIndex = state.findIndex(todoItem => todoItem.id === action.id);
      return [
        ...state.slice(0, utilityIndex),
        ...state.slice(utilityIndex + 1)
      ];
    case 'UPDATE_TODO_SUCCESS':
      return state.map(item => (item.id === action.todoItem.id ? action.todoItem : item));
    case 'GET_TODOS_REQUEST':
      return state;
    case 'GET_TODOS_SUCCESS':
      return action.appTodos;
    default:
      return state;
  }
};
