import React, {Component} from 'react';
import Header from './components/layout/header'
import ToDos from './components/Todos'
import AddTodo from './components/AddTodo'

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id:1,
        title: 'feed cat',
        completed: false
      },
      {
        id:2,
        title: 'get cat food',
        completed: true
      },
      {
        id:3,
        title: 'meetong with cat',
        completed: false
      }
    ]
  }

  // toggle complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  // delete todo
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !==id)]})
  }

  render() {
    return (
      <div className="App">
       <div className="container">
          <Header />
          <AddTodo />
          <ToDos todos={this.state.todos} markComplete={this.markComplete} 
          delTodo={this.delTodo}/>
       </div>
      </div>
    )
  }
}

export default App;
