import React, { Component } from 'react';
import MenuList from './MenuList';

export default class MenuContainer extends Component {
  getItems() {
    return (
      [
        { title: 'Users', url: 'http://www.whatever.com' },
        { title: 'Blusers', url: 'www.whatweater.com' },
        { title: 'Blusers', url: 'www.whatweater.com' },
        { title: 'Blusers', url: 'www.whatweater.com' },
        { title: 'Blusers', url: 'www.whatweater.com' },
        { title: 'Blusers', url: 'www.whatweater.com' },
        { title: 'Blusers', url: 'www.whatweater.com' },
        { title: 'Blusers', url: 'www.whatweater.com' },
        { title: 'Blusers', url: 'www.whatweater.com' },
        { title: 'Blusers', url: 'www.whatweater.com' },
        { title: 'Blusers', url: 'www.whatweater.com' },
      ]
    );
  }

  render() {
    return (
      <MenuList menuHeader={'Menu'} items={this.getItems()} visibility={this.props.visibility} />
    );
  }
}

MenuContainer.propTypes = {
  visibility: React.PropTypes.bool.isRequired,
};

