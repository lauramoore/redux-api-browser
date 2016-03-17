import React, { Component } from 'react';
import ApiApp from 'components/ApiApp';
import { connect } from 'react-redux';
//import * as contentActionCreators from '../actions/ContentAction.js';

class ApiPage extends Component {
  render() {
    return (
      <div>
        <ApiApp />
      </div>
    );
  }
}

/*
const mapStateToProps = function mapStateToProps(state) {
  return { available: state };
};
export default connect(mapStateToProps, contentActionCreators)(ApiPage);
*/
