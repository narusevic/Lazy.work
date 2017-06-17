import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from "../actions/index";
import { bindActionCreators } from 'redux';

class Menu extends React.Component
{
    constructor(props)
    {
        super(props);

        this.checkLoginState = this.checkLoginState.bind(this);
        this.facebookLogin = this.props.facebookLogin.bind(this);
    }

    componentDidMount()
    {
        console.log(this.props);
    }

    renderAuthorizedNavbar()
    {
    }

    render()
    {
        if (this.props.menuReducer.menuState === "welcome")
        {
            return (
                <div className="side-menu">
                    <div className="fb-login-button" data-size="medium" data-auto-logout-link="true" data-onlogin=
                        "checkLoginState();"></div>
                </div>
            )
        }
        else
        {

        }
    }

    checkLoginState()
    {
        FB.getLoginStatus(function (response)
        {
            //statusChangeCallback(response);
        });

        FB.api('/me', function (response)
        {
            console.log(JSON.stringify(response));
        });

        this.facebookLogin;
    };
} 

const mapDispatchToProps = (dispatch) =>
{
    return bindActionCreators(actions, dispatch);
};

const mapStateToProps = (state) =>
{
    return {
        menuReducer: state.menuReducer
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
