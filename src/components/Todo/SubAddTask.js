import React from 'react';

class SubAddTask extends React.Component{

    state ={
        taskDescription: ""
    }

    addTask = () =>{
        const task = {
            id: 1,
            taskDescription: this.state.takeDescription,
            done: false
        }
            
        this.props.newTask(task); //Viene Todo.js

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
                <i className="fas fa-plus-circle fa-2x d-md-none pointer" onClick={this.addTask}></i>
                <input type="button" className="btn btn-primary btn-sm d-none d-none d-md-block" value="ADD"
                onClick={this.addTask}
                />
            </div>
        </div>
        )
    }
}

export default SubAddTask;