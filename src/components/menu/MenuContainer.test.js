'use strict'

jest.unmock('./MenuContainer');
jest.unmock('./MenuList');
jest.unmock('./MenuItem');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var MenuContainer = require('./MenuContainer').default;

describe('Testing MenuContainer Component', function() {

  let componentInstance;

  it('Testing Component', function() {
    componentInstance = TestUtils.renderIntoDocument(<MenuContainer visibility={true} />);
    expect(componentInstance.props.visibility).toBe(true);
    expect(ReactDOM.findDOMNode(componentInstance)).not.toBe(null);

  });
});
