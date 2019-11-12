import React, {Component} from 'react';
import ToDos from './components/Todos'
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
  render() {
    return (
      <div className="App">
        <ToDos todos={this.state.todos} />
      </div>
    )
  }
}

export default App;
