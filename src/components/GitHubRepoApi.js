import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ObjectInspector from 'react-object-inspector';
import * as contentActionCreators from '../actions/Actions.js';

class ApiApp extends Component {
  render() {
    return (
    <div>
      <div>Network status : {this.props.networkStatus.status}</div>
      <Link to="/">&lt;Back to Index</Link>
      <section id="actions">
        <h2>Actions That Change State</h2>
         <ul>
           <li><button onClick={this.props.loadReposAction}>Load Laura's Repos</button></li>
         </ul>
      </section>
      <section>
        <h2>Repos</h2>
         <ObjectInspector data={this.props.repos} />
      </section>
     </div>
    );
  }
}

/*
 * exposes the state as props to the component
 */
const mapStateToProps = function mapStateToProps(state) {
  return { repos: state.github.toJS(), networkStatus: state.network, loadReposAction: state.loadReposAction };
};
export default connect(mapStateToProps, contentActionCreators)(ApiApp);
