import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../styles/_add-todo.css';

class AddTodo extends Component {
   onClickAdd(event) {
      event.preventDefault();
      const {addTodo} = this.props;
      const target = event.target;
      const title = target.title.value.trim();
      if (title && title.length) {
         addTodo({title: title});
         target.title.value = '';
      }
   }

   render() {
      return (
         <form className="add-todo" onSubmit={e => this.onClickAdd(e)} autoComplete="off">
            <input type="text" name="title" placeholder="Input title" required="required" autoFocus={true}/>
            <button type="submit">Add</button>
         </form>
      )
   }
}

AddTodo.propTypes = {
   addTodo: PropTypes.func
};

export default AddTodo;