import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Sidebar from '../components/Sidebar/Sidebar';
import Home from '../pages/Home';
import About from '../pages/About';
import Account from '../pages/Account';
import CreateAccount from '../pages/CreateAccount';

import database from '../services/database';
import PATH from '../PATH';

class App extends Component {
  constructor() {
    super();

    this.state = {
      accounts: {},
      user: {},
      operations: {}
    };
  }

  handleSubmit = order => {
    database.ref('operations').push(order);
  };

  addAccount = accountBody => {
    this.setState({
      accounts: {
        ...this.state.accounts,
        [Object.keys(this.state.accounts).length + 1]: accountBody
      }
    });
  };

  CreateAccountWithAddAccount = () => (
    <CreateAccount createAccount={this.addAccount} />
  );

  componentDidMount() {
    const operationsRef = database.ref('operations');

    operationsRef.on('value', snapshot => {
      let items = snapshot.val();

      this.setState({
        operations: { ...this.state.operations, ...items }
      });
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__layout">
            <div className="App_sidebar">
              <Sidebar accounts={this.state.accounts} />
            </div>
            <div className="App__content">
              <Route exact path={`${PATH}/`} component={Home} />
              <Route exact path={`${PATH}/about`} component={About} />
              <Route
                path={`${PATH}/account/:accountId`}
                component={() => (
                  <Account
                    operations={this.state.operations}
                    onSubmit={this.handleSubmit}
                  />
                )}
              />
              <Route
                path={`${PATH}/create-account`}
                component={this.CreateAccountWithAddAccount}
              />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
