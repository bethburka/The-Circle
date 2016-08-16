import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './Header/Header';
import MenuContainer from './menu/MenuContainer';
import * as Actions from '../actions/index';

require('../style/main.scss');

class App extends Component {
  render() {
    const { menu, actions } = this.props;
    return (
      <div className="container">
        <Grid>
          <Row>
            <Col sm={12}>
              <Header toggleMenu={actions.toggleMenu} />
            </Col>
          </Row>
          <Row>
            <Col sm={2} md={2} xsHidden>
              <MenuContainer visibility={menu[0].MenuVisible} />
            </Col>
            <Col sm={10} md={10}>
              <div >
                {this.props.children}
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node.isRequired,
  menu: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
};


function mapStateToProps(state) {
  return {
    menu: state.menu,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
