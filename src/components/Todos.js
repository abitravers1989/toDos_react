import React, {Component} from 'react';
import TodoItem from './Todoitem'
import PropTypes from 'prop-types'

class ToDos extends Component {
    // markComplete = () => {
    //     console.log('---->', 'hiiii')
    // }
  render() {
    return this.props.todos.map((todo) => (
       <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}
       delTodo= {this.props.delTodo}/>
    ))
  }
}

ToDos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default ToDos;
