import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TodosActions from '../actions/todos';
import * as TodoEditorActions from '../actions/todoEditor';
import '../styles/_edit-todo.css';

class EditTodo extends Component {

   onClickUpdate(event) {
      event.preventDefault();
      const {editTodoId, todosActions, todoEditorActions} = this.props;
      const target = event.target;
      const title = target.title.value.trim();
      if (title && title.length) {
         todosActions.updateTodo({id: editTodoId, title: title});
      }
      todoEditorActions.stopTodoEdit();
   }

   render() {
      const {item, todoEditorActions} = this.props;
      return (
         <form className="edit-todo" onSubmit={e => this.onClickUpdate(e)} autoComplete="off">
            <input type="text" name="title" placeholder="Input title" defaultValue={item.title} required="required" autoFocus={true}/>
            <div className="buttons">
               <button type="submit">Update</button>
               <button type="button" onClick={() => todoEditorActions.stopTodoEdit()}>Cancel</button>
            </div>
         </form>
      )
   }
}

EditTodo.propTypes = {
   item: PropTypes.shape({
      _id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
   }),
   editTodo: PropTypes.bool.isRequired,
   todosActions: PropTypes.shape({
      updateTodo: PropTypes.func
   }),
   todoEditorActions: PropTypes.shape({
      stopTodoEdit: PropTypes.func
   })
};

const mapStateToProps = state => ({
   item: state.todos.items.find(item => item._id === state.todoEditor.editTodoId) || null,
   editTodo: state.todoEditor.editTodo,
   editTodoId: state.todoEditor.editTodoId
});

const mapDispatchToProps = dispatch => ({
   todosActions: bindActionCreators(TodosActions, dispatch),
   todoEditorActions: bindActionCreators(TodoEditorActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);