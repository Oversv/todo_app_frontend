import React from 'react';
import SubAddTask from './SubAddTask';
import SubStatusBar from './SubStatusBar';
import SubFilterBar from './SubFilterBar';
import SubTaskList from './SubTaskList';

class Todo extends React.Component {
    state =  {
        tasks: []
    }

    addTask = (task) =>{
        let tasks = this.state.tasks;
        
        tasks.push(task);

        this.setState({tasks})
    }   
    
    render() {
        return ( 
            <main class="main">
                <div className="container sizeTodo">
                    <SubStatusBar/>
                    <SubAddTask newTask={this.addTask}/>
                    <SubTaskList tasks={this.state.tasks}/>
                    <SubFilterBar/>
                </div>
            </main>
        )
    }
}

export default Todo;