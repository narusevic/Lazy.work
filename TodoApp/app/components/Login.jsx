import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      rememberMe: false
    };

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRememberMeChange = this.handleRememberMeChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleUserNameChange(e) {
    this.setState({ userName: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleRememberMeChange(e) {
    this.setState({ rememberMe: e.target.checked });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  render() {
    const errorContainer = this.props.error
      ? (<div className="alert alert-danger">{this.props.error}</div>)
      : null;
    const submitDisabled = !this.state.userName || !this.state.password;

    return (
      <form onSubmit={this.handleFormSubmit}>
        {errorContainer}
        <div className="form-group">
          <input
            type="text" className="form-control" placeholder="User Name"
            value={this.state.userName}
            onChange={this.handleUserNameChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password" className="form-control" placeholder="Password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </div>
        <div className="checkbox">
          <label htmlFor="remember-me">
            <input
              type="checkbox" id="remember-me"
              checked={this.state.rememberMe}
              onChange={this.handleRememberMeChange}
            />
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-block btn-default" disabled={submitDisabled}>
          {this.props.loading ? 'Logging in...' : 'Log in'}
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.login.loading,
  error: state.login.error
});

const mapDispatchToProps = dispatch => ({
  login: body => dispatch(login(body))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
