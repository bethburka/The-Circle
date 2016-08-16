import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <div style={{ paddingBottom: '10px' }}>
        <Glyphicon glyph="menu-hamburger" onClick={this.props.toggleMenu} />
        <h1><span className="label label-info">Circle</span></h1>
      </div>
    );
  }
}
