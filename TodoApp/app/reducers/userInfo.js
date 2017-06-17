const defaultState = {
  loading: true
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGOUT_REQUEST':
    case 'GET_USER_INFO_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'GET_USER_INFO_SUCCESS':
      return {
        ...state,
        loading: false,
        userInfo: action.payload
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        loading: false,
        userInfo: null
      };
    case 'LOGOUT_ERROR':
    case 'GET_USER_INFO_ERROR':
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
