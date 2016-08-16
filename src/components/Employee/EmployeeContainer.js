import React, { Component } from 'react';
import { Row, Grid, Button, Glyphicon, Image } from 'react-bootstrap';
import EmployeeCard from './EmployeeCard';
import { Link } from 'react-router';


class EmployeeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {},
    };
  }


  componentDidMount() {
    this.fetchEmployee()
      .then((returnedEmployee) => {
        const employee = returnedEmployee[0] || null;
        this.setState({
          employee,
        });
      });
  }

  fetchEmployee() {
    return fetch(
      'http://beta.json-generator.com/api/json/get/EJ7rInDM-',
      { method: 'get', mode: 'cors' }
    ).then((response) => response.json());
  }

  render() {
    return (
      <Grid>
        <Row style={{margin: '0 0 1em 0'}}>
        <Link to="/EmployeesContainer">  <Button><Glyphicon glyph='menu-left'/></Button></Link>
        </Row>
        <Row style={{ textAlign: 'center' }}>
          <Image width={300} height={300} src={this.state.employee.img} thumbnail />
        </Row>
        <Row>
          <h2>{this.state.employee.name}</h2>
          <EmployeeCard title="position" info={this.state.employee.position} />
          <EmployeeCard title="Description" info={this.state.employee.description} />
        </Row>

      </Grid>
  );
  }
}

export default EmployeeContainer;
