'use strict';
jest.unmock('./EmployeesListItem')


const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const EmployeesListItem = require('./EmployeesListItem').default;


describe('Testing EmployeesList Component', function() {

    let componentInstance;
    let returnRender;
    let employee;
    let index;

    it('Should be visible', function(){

      employee = { description: 'Users', img: 'url/photo.jpg', name: 'paco', position: 'cleaner' };
      index = 1;
      componentInstance = TestUtils.renderIntoDocument(<EmployeesListItem
        employee={employee} index={index}/>);
      expect(componentInstance).not.toBe(null);

       let found = TestUtils.scryRenderedDOMComponentsWithTag(componentInstance, 'span');
       expect(found[1].textContent).toEqual('paco');

    });



});
