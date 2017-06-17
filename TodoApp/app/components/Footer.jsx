import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getUserInfo, logout } from '../actions';

class Footer extends React.Component {
  static renderLoading() {
    return (
      <div role="navigation" className="navbar navbar-default nav-center">
        <div className="navbar-header">
          Loading...
        </div>
      </div>
    );
  }

  static renderUnauthorizedNavbar() {
    return (
      <div role="navigation" className="navbar navbar-default nav-center">
        <div className="navbar-header">
          <Link to="/login">Log in</Link>
        </div>
        <div className="navbar-header">
          <Link to="/register">Register</Link>
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.renderAuthorizedNavbar = this.renderAuthorizedNavbar.bind(this);
  }

  componentDidMount() {
    this.props.getUserInfo();
  }

  renderAuthorizedNavbar() {
    return (
      <div role="navigation" className="navbar navbar-default nav-center">
        <div className="navbar-header">
          <Link to="/">Todos</Link>
        </div>
        <div className="navbar-header">
          <Link to="/settings">Settings</Link>
        </div>
        <div className="navbar-header">
          <a onClick={this.props.logout}>Log out</a>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.loading) {
      return Footer.renderLoading();
    }

    if (!this.props.userInfo) {
      return Footer.renderUnauthorizedNavbar();
    }

    return this.renderAuthorizedNavbar();
  }
}

const mapStateToProps = state => ({
  loading: state.userInfo.loading,
  userInfo: state.userInfo.userInfo
});

const mapDispatchToProps = dispatch => ({
  getUserInfo: () => dispatch(getUserInfo),
  logout: () => dispatch(logout)
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
