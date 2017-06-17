import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

import * as actionCreators from '../actions';

import AdminFooter from './AdminFooter';

class TodoApp extends React.Component {
  componentDidMount() {
    this.props.getAppSettings();
  }
  render() {
    return (
      <div className="todo-app" style={{ backgroundColor: this.props.appSettings.appColor }}>
        {this.props.children}
        <AdminFooter />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const mapStateToProps = state => ({
  appSettings: state.appSettings
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
