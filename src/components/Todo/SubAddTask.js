import React from 'react';
import uuid from "uuid/v4";

class SubAddTask extends React.Component{
  
    state ={     
        taskDescription: "",
    }   

    handleAddTask = () =>{           
        const task = {  
            id: uuid(),        
            taskDescription: this.state.takeDescription,         
            done: false 
        }
     
        this.props.newTask(task); 
        this.setState({takeDescription: ""});     
    }

    takeDescriptionChanged = (event) =>{
        let takeDescription = this.state.takeDescription;

        takeDescription = event.target.value;
        this.setState({takeDescription});             
    }

    render(){
        return(            
        <div className="row align-items-center">
            <div className="col-10">
                <input type="text" className="input-group" id="addTask" placeholder="Add your task here"
                    value={this.state.takeDescription}
                    onChange={this.takeDescriptionChanged}                
                />
            </div>
            <div className="col-2">
                <i className="fas fa-plus-circle fa-2x d-md-none pointer" onClick={this.handleAddTask}></i>
                <input type="button" className="btn btn-primary btn-sm d-none d-none d-md-block" value="ADD"
                onClick={this.handleAddTask}
                />
            </div>
        </div>
        )
    }
}

export default SubAddTask;