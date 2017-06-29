import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todoslist from './Todos-List';
import CreatTodo from './creat-todo';
import _ from 'lodash';


const todos = [{
  description: "make React tutorial",
  done: false
},
{
description: "Haveing dinner",
  done: true
}
];

export default class App extends Component {
constructor(props){
  super(props);
  
  this.state = {
    todos
  };

}
 render() {
    return ( 
    <div> < h1> React Todos APP </h1>
    <CreatTodo createDescription={this.createDescription.bind(this)} />
    <Todoslist todos={this.state.todos}  deleteDescription={this.deleteDescription.bind(this)}  
    saveDescription={this.saveDescription.bind(this)} 
    />
    </div >
    
    );
  }
  createDescription(description){
this.state.todos.push({
  description,
  done : false
});
this.setState({todos : this.state.todos})
  }

 deleteDescription(taskToDelete) {
    _.remove(this.state.todos, todo => todo.description === taskToDelete);
        this.setState({ todos: this.state.todos });
    }

    saveDescription(oldDescription, newDescription){
      const foundTodo = _.find(this.state.todos, todo => todo.description === oldDescription);
      foundTodo.description = newDescription ;
      this.setState({todos: this.state.todos})
    }
}
