import React from 'react';
import { connect } from 'react-redux';
import { register } from '../actions';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleUserNameChange(e) {
    this.setState({ userName: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleConfirmPasswordChange(e) {
    this.setState({ confirmPassword: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.register(this.state);
  }

  render() {
    const errorContainer = this.props.error
      ? (<div className="alert alert-danger">{this.props.error}</div>)
      : null;
    const submitDisabled = !this.state.userName ||
      !this.state.email ||
      !this.state.password ||
      !this.state.confirmPassword ||
      this.state.password !== this.state.confirmPassword;

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
            type="email" className="form-control" placeholder="Email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password" className="form-control" placeholder="Password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password" className="form-control" placeholder="Confirm Password"
            value={this.state.confirmPassword}
            onChange={this.handleConfirmPasswordChange}
          />
        </div>
        <button type="submit" className="btn btn-block btn-default" disabled={submitDisabled}>
          {this.props.loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.registration.loading,
  error: state.registration.error
});

const mapDispatchToProps = dispatch => ({
  register: body => dispatch(register(body))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
