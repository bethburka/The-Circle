'use strict';
jest.unmock('./EmployeesList');
jest.unmock('./EmployeesListItem')


const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const EmployeesList = require('./EmployeesList').default;
const EmployeesListItem = require('./EmployeesListItem').default;


describe('Testing EmployeesList Component', function() {

    let componentInstance;
    let returnRender;
    let employees;

    it('Should be visible', function(){

      employees = [{ description: 'Users', img: 'url/photo.jpg', name: 'paco', position: 'cleaner' },
      { description: 'Users2', img: 'url/photo2.jpg', name: 'pepe', position: 'cleaner' },];

      componentInstance = TestUtils.renderIntoDocument(<EmployeesList employees={employees} />);
      expect(componentInstance).not.toBe(null);

       let found = TestUtils.findRenderedDOMComponentWithClass(componentInstance, 'panel-footer');
       expect(found.textContent).toEqual('Total number of employees: 2');

    });

    it('Should show two EmployeesListItem', function() {
      returnRender = componentInstance.renderEmployeesListItemViews();
       expect(returnRender[1].props.employee.name).toEqual('pepe');
       expect(returnRender.length).toEqual(2);
    });


});
