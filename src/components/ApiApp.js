import React, { Component } from 'react';
import { connect } from 'react-redux';
import ObjectInspector from 'react-object-inspector';
import * as contentActionCreators from '../actions/TodosAction.js';

class ApiApp extends Component {
  render() {
    /*
    const { todos, filter, addTodo, deleteTodo, toggleChecked, setFilter, clearTodo } = this.props;
    */
    const { content, loadDefault } = this.props;
    return (
    <div>
      <section id="actions">
         <button onClick={loadDefault}>Load Default</button>
      </section>
      <section id="show-content">
         <ObjectInspector data={content} />
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
  return { content: state.todos.get('content') };
};
export default connect(mapStateToProps, contentActionCreators)(ApiApp);
