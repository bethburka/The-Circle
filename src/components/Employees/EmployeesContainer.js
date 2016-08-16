import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import EmployeesList from './EmployeesList';


class EmployeesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      index: 0,
    };
    this.onEmployeeClick = this.onEmployeeClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
  }

  componentDidMount() {
    this.fetchEmployees()
      .then((employees) => {
        this.setState({
          employees,
        });
      });
  }
  onBackClick() {

  }
  onEmployeeClick() {
    // do something
  }
  fetchEmployees() {
    return fetch(
      'http://beta.json-generator.com/api/json/get/4yvmIJ3-b',
      { method: 'get', mode: 'cors' }
     ).then((response) => response.json());
  }

  sort(employees) {
    employees.sort(function sorting(a, b) {
      const nameA = a.name;
      const nameB = b.name;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    return employees;
  }

  render() {
    return (
      <Grid>
        <Row>
          <EmployeesList
            onEmployeeClick={this.onEmployeeClick}
            employees={this.sort(this.state.employees)}
          />
        </Row>
      </Grid>
    );
  }
}

export default EmployeesContainer;
