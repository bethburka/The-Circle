import React, { Component } from 'react';
import { ListGroup, Panel } from 'react-bootstrap';
import EmployeesListItem from './EmployeesListItem';
import { Link } from 'react-router';

class EmployeesList extends Component {
  static propTypes = {
    index: React.PropTypes.number.isRequired,
    onEmployeeClick: React.PropTypes.func.isRequired,
  }

  renderEmployeesListItemViews() {
    const { employees } = this.props;
    console.log(employees);
    return employees.map((employee, index) =>
      <EmployeesListItem
        key={index} employee={employee} index={index}
      />);
  }
  render() {
  return (
      <Panel
        header="List of employees"
        footer={`Total number of employees: ${this.props.employees.length}`}
        bsStyle="info"
      >
        <ListGroup >

          {this.renderEmployeesListItemViews()}

        </ListGroup>
      </Panel>
    );
  }
}

EmployeesList.propTypes = {
  employees: React.PropTypes.array.isRequired,
};

export default EmployeesList;
