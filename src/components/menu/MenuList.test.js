'use strict';
jest.unmock('./MenuList');
jest.unmock('./MenuItem')


var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var MenuList = require('./MenuList').default;
var MenuItem = require('./MenuItem').default;


describe('Testing MenuList Component', function() {

    let componentInstance;
    let returnRender;
    let varMenuHeader;
    let varItems;
    let varVisibility;

    it('Testing component', function(){

      varMenuHeader = "menu";
      varItems = [{ title: 'Users', url: 'http://www.whatever.com' },
      { title: 'Blusers', url: 'www.whatweater.com' },];
      varVisibility = true;

      componentInstance = TestUtils.renderIntoDocument(<MenuList
      menuHeader={varMenuHeader} items={varItems} visibility={varVisibility} />);
      expect(componentInstance).not.toBe(null);

      let found = TestUtils.findRenderedDOMComponentWithTag(componentInstance, 'p');
      expect(found.textContent).toEqual('visible');

    });

    it('Testing rederItems function', function() {
      returnRender = componentInstance.renderItems();
      //console.log('prueba 1', returnRender[1].props.item.description);
      expect(returnRender[1].props.item.title).toEqual('Blusers');
      expect(returnRender.length).toEqual(2);
    });


});



    // it('Testing more', function() {
    //   //console.log('test = ' + found.textContent);
    //
    //   let componentType = TestUtils.findRenderedComponentWithType(componentInstance, MenuList);
    //   //console.log(componentType);
    //
    //   //console.log('returnRender: ',returnRender.props.children);
    //
    //   //console.log('componentInstance: ',componentInstance.props);
    //
    //   // expect(result.type).toBe('div');
    //   // expect(result.props.children).toEqual([
    //   //   <span className="heading">Title</span>,
    //   //   <Subcomponent foo="bar" />
    //
    //   let renderer = TestUtils.createRenderer();
    //   renderer.render(<MenuList
    //   menuHeader={varMenuHeader} items={varItems} visibility={varVisibility} />);
    //   let output = renderer.getRenderOutput();
    //   console.log('prueba 2', output.props.children[1].props.children[1].type);
    // });




      //   it('Testing onUpdate function', function(){
      //     var prueba = document.getElementById('container');
      //     componentInstance.onUpdate;
      //     expect(componentInstance.state.mHidden).toBe(true);
      //   });

      // console.log(componentInstance);
      // var renderedMyComponent = ReactDOM.findDOMNode(componentInstance);
      // console.log(renderedMyComponent);
      //
      // let renderer = TestUtils.createRenderer();
      //
      //

      // renderer.render(<Home/>);
      // let output = renderer.getRenderOutput();
      // output.props.children.props.children.props.children[1].props.onUpdate;
      // console.log(output.props.children.props);
      // expect(output).not.toBe(null);



      //componentInstance.setState({isCool: true});
      //html = componentInstance.getDOMNode().textContent;

     /*  function getColumn() {
              const col = TestUtils.renderIntoDocument(
                <EmployeePage />);

              return React.findDOMNode(col);
          }
      */
      //console.log(componentInstance);
      //var comp = ReactDOM.findDOMNode(componentInstance);
      //console.log(comp);
      //var comp2 = getColumn();
      //expect(html).toContain('something cool');

      //console.log(renderedMyComponent.attributes);
      //expect(TestUtils.isDOMComponent(renderedMyComponent)).not.toBe(null);

      //expect(renderedMyComponent.attributes['mHidden'].value).toBeTruthy();

      // console.log(comp2);
