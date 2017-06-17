import React from 'react';
import { Link } from 'react-router';

export default class AdminFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div role="navigation" className="navbar navbar-default nav-center">
        <div className="navbar-header">
          <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
}
