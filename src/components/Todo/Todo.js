import React from 'react';
import SubAddTask from './SubAddTask';
import SubCounter from './SubCounter';
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
                    <SubCounter counter={this.state.tasks.length}/>
                    <SubAddTask newTask={this.addTask}/>
                    <SubTaskList tasks={this.state.tasks}/>
                    <SubFilterBar/>
                </div>
            </main>
        )
    }
}

export default Todo;