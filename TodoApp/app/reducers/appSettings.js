export default (state = { appColor: '', loading: false }, action) => {
  switch (action.type) {
    case 'SETTINGS_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'UPDATE_SETTINGS':
      return action.appSettings;
    default:
      return state;
  }
};
