import React, {Component} from 'react';
import TodoItem from './Todoitem'
import PropTypes from 'prop-types'

class ToDos extends Component {
  render() {
    return this.props.todos.map((todo) => (
       <TodoItem key={todo.id} todo={todo}/>
    ))
  }
}

ToDos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default ToDos;
