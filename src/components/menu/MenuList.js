import React, { Component } from 'react';
import MenuItem from './MenuItem.js';
import { Panel, Nav } from 'react-bootstrap';

export default class MenuList extends Component {
  renderItems() {
    return this.props.items.map((item, index) =>
      <MenuItem key={index} item={item} />
    );
  }

  render() {
    return (
      <Panel
        header={this.props.menuHeader}
        bsStyle="info">
        <p>{(this.props.visibility) ? 'visible' : 'hidden'}</p>
        <Nav bsStyle="pills" stacked activeKey={1} >
          {this.renderItems()}
        </Nav>
      </Panel>
    );
  }
}

MenuList.propTypes = {
  menuHeader: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired,
  visibility: React.PropTypes.bool.isRequired,
};
