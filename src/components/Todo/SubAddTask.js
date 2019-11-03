import React from 'react';
import uuid from "uuid/v4";

class SubAddTask extends React.Component{
  
    state ={  
        id: "",  
        taskDescription: "",
        done: false
    }   

    handleAddTask = () =>{           
        const task = {  
            id: uuid(),        
            taskDescription: this.state.taskDescription,         
            done: false 
        }
     
        this.props.newTask(task); 
        this.setState({taskDescription: ""});     
    }

    takeDescriptionChanged = (event) =>{
        let takeDescription = this.state.taskDescription;
        
        takeDescription = event.target.value;        
        this.setState({taskDescription: takeDescription});             
    }

    render(){
        return(            
        <div className="row align-items-center">
            <div className="col-10">
                <input 
                    type="text" newTask
                    className="input-group" 
                    id="addTask" 
                    autocomplete = "off"
                    placeholder="Add your task here"
                    value={this.state.taskDescription}
                    onChange={this.takeDescriptionChanged}                
                />
            </div>
            <div className="col-2">
               <button 
                    className ="reset-btn d-md-none"
                    onClick={this.handleAddTask} 
                    disabled={this.state.taskDescription.length === 0}
                >
                    <i className="fas fa-plus-circle fa-2x d-md-none"></i>
               </button>
    
                <button                   
                    className="btn btn-primary btn-sm d-none d-none d-md-block"                    
                    onClick={this.handleAddTask}
                    disabled={this.state.taskDescription.length === 0}
                >ADD</button>
            </div>
        </div>
        )
    }
}

export default SubAddTask;