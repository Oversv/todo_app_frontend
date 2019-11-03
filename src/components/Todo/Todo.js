import React from 'react';
import SubAddTask from './SubAddTask';
import SubCounter from './SubCounter';
import SubFilterBar from './SubFilterBar';
import SubTaskList from './SubTaskList';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state =  {
            tasks: [],
            completedTasks: [],
            pendingTasks: [],
            render: "tasks"                
        }       
    }
    
    addTask = task =>{
        const tasks = this.state.tasks;      
        
        tasks.push(task);        
        this.setState({tasks: tasks})     
        this.setState({pendingTasks: tasks})  
    }   

    deleteTask = id =>{
        const tasks = this.state.tasks.filter(element => element.id !== id);   
        const pendingTasks = this.state.pendingTasks.filter(element => element.id !== id);   
        const completedTasks = this.state.completedTasks.filter(element => element.id !== id);  
       
        this.setState({tasks: tasks});  
        this.setState({pendingTasks: pendingTasks});  
        this.setState({completedTasks: completedTasks});  
    }

    deleteAllTasks = () =>{        
        let tasks = [];  
        let deleteAll = window.confirm('Do you want to delete all tasks?');

        if(deleteAll) {
            this.setState({tasks: tasks});
            this.setState({pendingTasks: tasks});  
            this.setState({completedTasks: tasks});  
        }          
    }

    updateTask = id =>{        
     
        const tasks = this.state.tasks.map(element =>{   
                     
            if(element.id === id){
              element.done = !element.done;
            }   
            return element;
        })
        
        this.setState({tasks: tasks});     
       
    };

    pendingTasks = () =>{
        const tasks = this.state.tasks.filter(element => !element.done);
        
        this.setState({pendingTasks: tasks});  
        this.setState({render: "pending" })  
    }    

    completedTasks = () =>{
        const tasks = this.state.tasks.filter(element => element.done);
        
        this.setState({completedTasks: tasks});  
        this.setState({render: 'completed'});   
    }
    
    allTasks = () =>{
        const tasks = this.state.tasks.filter(element => element); 
      
        this.setState({tasks: tasks});  
        this.setState({render: "tasks" }) 
    } 

    render() {
        
        return ( 
            <main className="main">
                <div className="container sizeTodo">
                    <SubCounter 
                        counter={this.state}
                        render={this.state.render}/>
                    <SubAddTask newTask={this.addTask}/>
                    <SubTaskList 
                        render={this.state.render}
                        showTasks={this.state.tasks} 
                        showPendig={this.state.pendingTasks}                        
                        showCompleted={this.state.completedTasks}
                        deleteTask={this.deleteTask} 
                        updateTask ={this.updateTask}/>
                    <SubFilterBar 
                        deleteAll={this.deleteAllTasks}
                        pendingTasks={this.pendingTasks}
                        completedTasks={this.completedTasks}
                        allTasks={this.allTasks}/>
                </div>
            </main>
        )
    }
}

export default Todo;