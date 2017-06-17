export default (state = {}, action) => {

    console.log('reducer');
  switch (action.type) {
    case 'AFTER_LOGIN':
        return Object.assign({}, state, {
            menuState: "loggedIn"
          });
    case 'CREATE_JOB':
        return Object.assign({}, state, {
            menuState: "creatingJob"
          });
    case 'AFTER_CREATING_JOB':
        return Object.assign({}, state, {
            menuState: "jobCreated"
          });
    case 'AFTER_LOGIN':
        return Object.assign({}, state, {
            menuState: "loggedIn"
          });
    case 'EDIT_JOB':
        return Object.assign({}, state, {
            menuState: "editJob"
          });
    case 'CONTACT':
        return Object.assign({}, state, {
            menuState: "contact"
          });

    default:
      return state;
  }
};
