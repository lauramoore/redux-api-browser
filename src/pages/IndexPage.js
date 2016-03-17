import React, { Component } from 'react';
import { Link } from 'react-router';

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <h1>Browse a store - api</h1>
        <ul>
          <li><Link to="/content">Content API</Link></li>
        </ul>
      </div>
    );
  }
}
