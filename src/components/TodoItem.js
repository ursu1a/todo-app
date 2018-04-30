import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/_todo-item.css';

class TodoItem extends Component {

   clickDeleteItem() {
      const {item: {_id}, onDeleteItem} = this.props;
      if (window.confirm('Are you sure?')) {
         onDeleteItem(_id);
      }
   }

   render() {
      const {item, onEditItem, onToggleItem} = this.props;
      const _id = item._id;
      return (
         <div className={"todo-item " + (item.completed ? "checked" : "")}>
            <label>
               <input type="checkbox" checked={item.completed ? "checked" : ""} onChange={() => onToggleItem(_id)}/>
               <div className="title" title={item.title}>{item.title}</div>
            </label>
            <div className="edit">
               <button className="edit-item" onClick={() => onEditItem(_id)} disabled={item.completed ? "disabled" : ""}>Edit</button>
               <button className="del-item" onClick={this.clickDeleteItem.bind(this)}>Delete</button>
            </div>
         </div>
      )
   }
}

TodoItem.propTypes = {
   item: PropTypes.shape({
      _id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
   }),
   onEditItem: PropTypes.func,
   onToggleItem: PropTypes.func
};

export default TodoItem;