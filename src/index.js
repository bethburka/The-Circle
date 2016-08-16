import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import EmployeesContainer from './components/Employees/EmployeesContainer';
import EmployeeContainer from './components/Employee/EmployeeContainer';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={EmployeesContainer} />
        <Route path="Employee/:id" component={EmployeeContainer} />
        <Route path="/EmployeesContainer" component={EmployeesContainer} />

      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
