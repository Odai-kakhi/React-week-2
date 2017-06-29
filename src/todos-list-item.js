import React, {Component} from 'react';
import App from './App';
export default class TodosListItem extends React.Component {
  constructor(props){
      super(props)
      
      this.state={
         isEditing : false 
      }
  }

renderDescriptionSection(){
const {description, done } = this.props;
const descriptionCheck = {
color : done ? 'green' : 'red'
}

if(this.state.isEditing){
    return (
        <td>
            <form onSubmit={this.onSaveClick.bind(this)}>
               <input type="text" defaultValue={description} ref="editInput" />
            </form>
        </td>
    );
}
    return(
        <td style={descriptionCheck}> {description} </td>
    );
}



  renderActionSection() {

   if(this.state.isEditing){
       return (
           <td>
                <button onClick={this.onSaveClick.bind(this)}>Save</button>
                <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
           </td>
       ); 
   }
  }

  render() {
    return ( 
          <tr>
                <td> 
                    {this.renderDescriptionSection()} 
                    {this.renderActionSection()}

                </td>      
              <td>
                  <button onClick={this.onEditClick.bind(this)}>Edit</button>
                  <button onClick={this.props.deleteDescription.bind(this ,this.props.description)}>Delete</button>
                  </td>
          </tr>
    );
  }
  onEditClick(){
      this.setState({isEditing : true});
  }
  onCancelClick(){
      this.setState({isEditing : false});
  }
  onSaveClick(event){
   event.preventDefault();
   const oldDescription = this.props.description;
   const newDescription = this.refs.editInput.value;
   this.props.saveDescription(oldDescription ,newDescription);
   this.setState({isEditing : false})
  }
}
