import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Label, Media, ListGroupItem } from 'react-bootstrap';

class EmployeesListItem extends Component {
  static propTypes = {
    onBackClick: React.PropTypes.func.isRequired,
    index: React.PropTypes.number.isRequired,
    employee: React.PropTypes.object.isRequired,
  };

  render() {
    const { index, employee: { name, position, description, img } } = this.props;


    return (
      <ListGroupItem key={index}>
        <Link to={`/Employee/${index}`}>

        <Media>
            <Media.Left>
             <img width={50} heigth={50} src={img} alt="hi" />
            </Media.Left>
            <Media.Body>
              <Grid>
                <Row>
                  <Label>{name}</Label>
                </Row>
                <Row>
                  <Label>{position}</Label>
                </Row>
                <Row>
                  <p>{description}</p>
                </Row>
              </Grid>
            </Media.Body>
          </Media>
        </Link>
      </ListGroupItem>
    );
  }
}




export default EmployeesListItem;
