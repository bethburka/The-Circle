import React from 'react';
import { Panel } from 'react-bootstrap';


class EmployeeCard extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    info: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]).isRequired,
  };
  render() {

    return (
      <Panel header={title}>
        <span>{info}</span>
      </Panel>
    );
  }
}

export default EmployeeCard;

  /*

const EmployeeCard = ({ title, info }) =>

  <Panel header={title}>
    <span>{info}</span>
  </Panel>;

EmployeeCard.propTypes = {
  title: React.propTypes.string.isRequired,
  info: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
};

;*/
