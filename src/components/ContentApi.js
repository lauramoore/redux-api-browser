import React, { Component } from 'react';
import { connect } from 'react-redux';
import ObjectInspector from 'react-object-inspector';
import * as contentActionCreators from '../actions/Actions.js';

class ApiApp extends Component {
  render() {
    /*
    const { todos, filter, addTodo, deleteTodo, toggleChecked, setFilter, clearTodo } = this.props;
    */
    const { dictionary, activeLanguage, loadDefault } = this.props;
    return (
    <div>
      <section id="actions">
        <h2>Actions That Change State</h2>
         <ul>
           <li><button onClick={loadDefault}>Load Default</button></li>
           <li><button>English</button></li>
           <li><button>Latin</button></li>
         </ul>
      </section>
      <section>
        <h2>View State</h2>
        <div>Active Langauge: { activeLanguage }</div>
      </section>
      <section id="available-content">
        <h2>Content Store State</h2>
         <ObjectInspector data={dictionary} />
      </section>
     </div>
    );
  }
}

/*
 * This converts the Immutable back to JS object; in this case
 * the Immutable List becomes an array.
 */
const mapStateToProps = function mapStateToProps(state) {
  return { dictionary: state.dictionary.toJS(), activeLanguage: state.activeLanguage };
};
export default connect(mapStateToProps, contentActionCreators)(ApiApp);
