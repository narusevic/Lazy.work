export default (state = {}, action) => {
  switch (action.type) {
    case 'REGISTER_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null
      };
    case 'REGISTER_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
