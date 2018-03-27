import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HeaderApp from './components/HeaderApp.js';
import UserBrowser from './containers/UserBrowser.js';
import CompanyBrowser from './containers/CompanyBrowser.js';
import PortfolioBrowser from './containers/PortfolioBrowser.js';
import SingleUser from './containers/SingleUser.js';
import Home from './containers/Home.js';


class App extends Component {
  render() {
    return (
      <div>
        <HeaderApp />
        <main >
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/users" exact component={UserBrowser} />
          <Route path="/companies" exact component={CompanyBrowser} />
          <Route path="/portfolio" exact component={PortfolioBrowser} />
          <Route path="/user/:id" exact component={SingleUser} />
        </main>
      </div>
    );
  }
} 

export default App;
