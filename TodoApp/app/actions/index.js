import { push } from 'react-router-redux';

export const facebookLogin = (dispatch) => {
    dispatch({ type: 'AFTER_LOGIN' });

    console.log('action');
    //api
    //  .post('/api/account/logout')
    //  .then((response) => {
    //    if (response.ok) {
    //      dispatch({ type: 'LOGOUT_SUCCESS' });
    //    } else {
    //      dispatch({ type: 'LOGOUT_ERROR' });
    //    }
    //  });
};
