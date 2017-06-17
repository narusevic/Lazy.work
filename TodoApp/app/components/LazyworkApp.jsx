import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

import * as actionCreators from '../actions';

import Map from './Map';
import Menu from './Menu';

export default class LazyworkApp extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
        <div className="row-fluid">
            <Menu />
            <Map />
        </div>
    );
  }
}

//const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

//const mapStateToProps = state => ({
//  appSettings: state.appSettings
//});

//export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
