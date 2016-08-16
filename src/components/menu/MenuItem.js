import React from 'react';
import { NavItem } from 'react-bootstrap';

// export default class MenuItem extends React.Component {
//   render() {
//     let { item: { title, url } } = this.props;
//     return (
//       <NavItem eventKey={1} href={url}>{title}</NavItem>
//     );
//   }
// }

const MenuItem = ({ key, item }) =>
  <NavItem eventKey={key} href={item.url}>{item.title}</NavItem>;


MenuItem.propTypes = {
  item: React.PropTypes.object.isRequired,
  key: React.PropTypes.object,
};

export default MenuItem;
