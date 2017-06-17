import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

import * as actionCreators from '../actions';


class TodoAppSettings extends React.Component {
  constructor(props) {
    super(props);
    this.handleColorChange = this.handleColorChange.bind(this);
  }
  handleColorChange(e) {
    this.props.changeColorRequest(e.target.value);
  }
  render() {
    let colorChanger = (<input
      type="color"
      onChange={this.handleColorChange}
      value={this.props.appSettings.appColor}
    />);

    if (this.props.appSettings.loading) {
      colorChanger = <span>Loading...</span>;
    }

    return (
      <div className="app-color-picker">
        <div>
          <span>App color</span>
        </div>
        {colorChanger}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const mapStateToProps = state => ({
  appSettings: state.appSettings
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoAppSettings);
