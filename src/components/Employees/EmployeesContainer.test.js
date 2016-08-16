'use strict';
jest.unmock('./EmployeesContainer');


const fetch = require('node-fetch');
const fetchMock = require('fetch-mock');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const EmployeesContainer = require('./EmployeesContainer').default;
const fetchEmployees = jest.fn();


describe('Testing EmployeesContainer Component', function() {

    let componentInstance;
    let returnRender;
    let varMenuHeader;
    let varItems;
    let varVisibility;

    it('Should be visible', function(){

      varMenuHeader = "menu";
      varItems = [{ title: 'Users', url: 'http://www.whatever.com' },
      { title: 'Blusers', url: 'www.whatweater.com' },];
      varVisibility = true;

      componentInstance = TestUtils.renderIntoDocument(<EmployeesContainer />);
      expect(componentInstance).not.toBe(null);

      //let found = TestUtils.findRenderedDOMComponentWithTag(componentInstance, 'p');
      //expect(found.textContent).toEqual('visible');

    });

    // it('Testing rederItems function', function() {
    //   returnRender = componentInstance.renderItems();
    //   //console.log('prueba 1', returnRender[1].props.item.description);
    //   expect(returnRender[1].props.item.title).toEqual('Blusers');
    //   expect(returnRender.length).toEqual(2);
    // });


});
