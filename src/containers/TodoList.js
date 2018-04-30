import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TodosActions from '../actions/todos';
import * as TodoEditorActions from '../actions/todoEditor';
import EditTodo from './EditTodo';
import TodoItem from '../components/TodoItem';
import AddTodo from "../components/AddTodo";
import Error from "../components/Error";

class TodoList extends Component {
   render() {
      const {todos, error, hasCompleted, editTodo, editTodoId, todosActions, todoEditorActions} = this.props;
      return [
         <Error error={error} key="error"/>,
         <AddTodo addTodo={todosActions.addTodo} key="add"/>,
         <div className="todo-list" key="list">
            {todos && todos.length > 0 ?
               todos.map((item, index) => (
                  item._id !== editTodoId ?
                     <TodoItem item={item} key={index} onDeleteItem={todosActions.deleteTodo}
                               onEditItem={todoEditorActions.startTodoEdit} onToggleItem={todosActions.toggleTodo}/>
                     : editTodo && <EditTodo key={index}/>
               ))
               : <div className="list-empty">Todo list is empty</div>
            }
         </div>,
         todos && todos.length > 0 &&
            <button className="del-completed" disabled={!hasCompleted || editTodo ? "disabled" : ""} key="del"
               onClick={() => todosActions.removeCompleted()} title="Remove completed items">Remove completed</button>
      ]
   }
}

TodoList.propTypes = {
   todos: PropTypes.array,
   error: PropTypes.string,
   hasCompleted: PropTypes.bool,
   editTodo: PropTypes.bool,
   editTodoId: PropTypes.number,
   todosActions: PropTypes.shape({
      addTodo: PropTypes.func,
      deleteTodo: PropTypes.func,
      toggleTodo: PropTypes.func,
      removeCompleted: PropTypes.func
   }),
   todoEditorActions: PropTypes.shape({
      startTodoEdit: PropTypes.func
   })
};

const mapStateToProps = state => ({
   todos: state.todos.items,
   hasCompleted: state.todos.items.filter(item => item.completed).length > 0,
   error: state.todos.error,
   editTodo: state.todoEditor.editTodo,
   editTodoId: state.todoEditor.editTodoId
});

const mapDispatchToProps = dispatch => ({
   todosActions: bindActionCreators(TodosActions, dispatch),
   todoEditorActions: bindActionCreators(TodoEditorActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);