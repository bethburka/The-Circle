'use strict'

jest.unmock('./MenuItem');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var MenuItem = require('./MenuItem').default;

describe('Testing MenuItem Component', function() {

  let componentInstance;
  let key = 1;
  let item = { title: 'Blusers', url: 'www.whatweater.com' };

  it('Testing Component', function() {
    componentInstance = TestUtils.renderIntoDocument(<div><MenuItem item={item} key={key} /></div>);
    expect(ReactDOM.findDOMNode(componentInstance)
    .querySelector('a').textContent).toBe('Blusers');

  });
});
