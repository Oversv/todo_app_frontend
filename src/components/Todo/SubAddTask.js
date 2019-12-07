import React from 'react';
const moment = require('moment');
//import uuid from "uuid/v4";

class SubAddTask extends React.Component{

    state ={  
        taskId: "",  
        taskDescription: "",
        done: false,
        date: moment(new Date()).format("YYYY-MM-DD"),
        userId:1
    }   

    handleAddTask = () =>{           
        const task = {  
            //taskId: this.state.taskId,
            //taskId: uuid(),              
            taskDescription: this.state.taskDescription,         
            done: this.state.done,
            date: this.state.date,
            userId: this.state.userId
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
                    type="text" 
                    className="input-group input-addTask p-2" 
                    id="addTask" 
                    autoComplete = "off"
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
                    <i className="fas fa-plus-circle fa-2x d-md-none btn-awesome"></i>
               </button>
    
                <button                   
                    className="btn btn-sm d-none d-none d-md-block p-2"                    
                    onClick={this.handleAddTask}
                    disabled={this.state.taskDescription.length === 0}
                >ADD</button>
            </div>
        </div>
        )
    }
}

export default SubAddTask;