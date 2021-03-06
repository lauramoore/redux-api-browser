import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './lib/store';
const history = syncHistoryWithStore(hashHistory, store);
import IndexPage from 'pages/IndexPage';
import ContentApi from 'components/ContentApi';
import GitHubRepoApi from 'components/GitHubRepoApi';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={IndexPage} />
        <Route path="content" component={ContentApi} />
        <Route path="async" component={GitHubRepoApi} />
      </Router>
    );
  }
}
