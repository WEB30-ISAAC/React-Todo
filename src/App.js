import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Cut out holes in hydroponics kit for plants',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {

  constructor() {
    super(); // this.state, this.setState, lifecycle methods
    this.state = {
      tasks, // shorthand for tasks: tasks
    };
  }

  clearAllTasks = () => {
    this.setState ({
      tasks: this.state.tasks.filter(element => {
        return (element.completed === true && false)
      })
    })
  }

  
  clearCompleted = () => {
    this.setState ({
      tasks: this.state.tasks.filter(element =>{
        return (element.completed !== true)
      })
    })

  };
 

  // Class methods to update state
  toggleCompleted = clickedItemId => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === clickedItemId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addTask = taskName => {
    console.log(taskName)
    // add a new item to the groceries state
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className='App'>
        <div className='wrapper'>
          <div>
            <h2>Welcome to your Todo App!</h2>
          </div>
          
          <div className='header'>
            <h2>To-Do List</h2>
            <TodoForm addTask={this.addTask} />
          </div>
          <TodoList
            tasks={this.state.tasks}
            clearCompleted={this.clearCompleted}
            clearAllTasks={this.clearAllTasks}
            toggleCompleted={this.toggleCompleted}
          />
        </div>
      </div>
       
    );
  }
}

export default App;