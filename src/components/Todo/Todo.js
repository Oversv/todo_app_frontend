import React from 'react';
import SubAddTask from './SubAddTask';
import SubCounter from './SubCounter';
import SubFilterBar from './SubFilterBar';
import SubTaskList from './SubTaskList';

class Todo extends React.Component {
    state =  {
        tasks: []
    }
    
    addTask = task =>{
        let tasks = this.state.tasks;      

        tasks.push(task);
        this.setState({tasks})
    }   

    deleteTask = id =>{
        let tasks = this.state.tasks.filter(element => element.id !== id);   

        this.setState({tasks});   
    }

    deleteAllTasks = () =>{        
        let tasks = [];  
        let deleteAll = window.confirm('Do you want to delete all tasks?');

        if(deleteAll) this.setState({tasks});          
    }
    
    render() {
        return ( 
            <main className="main">
                <div className="container sizeTodo">
                    <SubCounter counter={this.state.tasks.length}/>
                    <SubAddTask newTask={this.addTask}/>
                    <SubTaskList tasks={this.state.tasks} deleteTask={this.deleteTask}/>
                    <SubFilterBar deleteAll={this.deleteAllTasks}/>
                </div>
            </main>
        )
    }
}

export default Todo;