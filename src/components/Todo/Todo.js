import React from 'react';
import SubAddTask from './SubAddTask';
import SubCounter from './SubCounter';
import SubFilterBar from './SubFilterBar';
import SubTaskList from './SubTaskList';
const axios = require ('axios');

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
    
    componentDidMount(){
        axios.get('https://b40qyul4lk.execute-api.eu-west-2.amazonaws.com/dev/tasks')
        .then((response)=> {

          this.setState({tasks: response.data.task})
          
        })
        .catch((error)=> {          
          console.log(error);
        });
    }

    addTask = task =>{

        axios.post('https://b40qyul4lk.execute-api.eu-west-2.amazonaws.com/dev/tasks', task)
        .then((response) => {


          const tasks = this.state.tasks;          
         // this.setState({tasks.taskId: response.data.taskId })
          task.taskId=response.data.taskId; //Revisar si hay que hacer el setState           
          tasks.push(task);   

          this.setState({tasks: tasks})     
          this.setState({pendingTasks: tasks})  //Revisar si quiero que se meta en este arrat
   
        });
    }   

    deleteTask = id =>{
      
        axios.delete(`https://b40qyul4lk.execute-api.eu-west-2.amazonaws.com/dev/tasks/${id}`)
        .then((response) => {       
           
            const tasks = this.state.tasks.filter(element => element.taskId !== id);   
            const pendingTasks = this.state.pendingTasks.filter(element => element.taskId !== id);   
            const completedTasks = this.state.completedTasks.filter(element => element.taskId !== id);  
   
            this.setState({tasks: tasks});
            this.setState({pendingTasks: pendingTasks});  
            this.setState({completedTasks: completedTasks});  
        })
        .catch(err => {
            console.log("Could not delete task", err);
          });

    }

    deleteAllTasks = () =>{        
        let tasks = [];  
        let deleteAll = window.confirm('Do you want to delete all tasks?');

        if(deleteAll) {
            
            axios.post('https://b40qyul4lk.execute-api.eu-west-2.amazonaws.com/dev/deleteAll')

            .then((response) => {

                this.setState({tasks: tasks});
                this.setState({pendingTasks: tasks});  
                this.setState({completedTasks: tasks}); 

            });
        }          
    }

    updateTask = id =>{    
       
        const taskId = this.state.tasks.filter(element => element.taskId === id);   
        let tasks = this.state.tasks;   

        let data = {
            taskDescription: taskId[0].taskDescription,
            done: !taskId[0].done,
            date: taskId[0].date,
            userId: taskId[0].userId,
        }
        taskId[0].done = data.done;
       
    
        axios.put(`https://b40qyul4lk.execute-api.eu-west-2.amazonaws.com/dev/tasks/${id}`, data)
        .then((response) => {

            this.setState({tasks: tasks})
        
        });   
       
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