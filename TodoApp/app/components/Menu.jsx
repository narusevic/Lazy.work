import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getUserInfo, logout } from '../actions';

export default class Menu extends React.Component
{

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        
    }

    renderAuthorizedNavbar()
    {
    }

    render()
    {
        return (
            <div className="side-menu">aa</div>
            )
    }
}

//const mapStateToProps = state => ({
//    loading: state.userInfo.loading,
//    userInfo: state.userInfo.userInfo
//});

//const mapDispatchToProps = dispatch => ({
//    getUserInfo: () => dispatch(getUserInfo),
//    logout: () => dispatch(logout)
//});

//export default connect(mapStateToProps, mapDispatchToProps)(Footer);
