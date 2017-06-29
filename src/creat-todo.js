import React from 'react';
import App from './App';


export default class CreatTodo extends React.Component {
    render() {
        return (
           <form onSubmit={this.handelCreat.bind(this)}>
               <input type="text" ref="createInput" />
               <button>Creat</button>
           </form>
        );
    }
    handelCreat(event){
        event.preventDefault();

        this.props.createDescription(this.refs.createInput.value);

        this.refs.createInput.value = '';
     }
}
