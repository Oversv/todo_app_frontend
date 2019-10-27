import React from 'react';
import SubTask from './SubTask';

class SubTaskList extends React.Component{
    render(){
        if(this.props.render === 'completed'){

            return(                      
                <div>
                    {this.props.showCompleted.map((element, index) =>{               
                        return <SubTask 
                            task={element}                                                 
                            key={index} 
                            deleteTask={this.props.deleteTask}
                            updateTask ={this.props.updateTask}
                        />                    
                    })}
                </div>
            )

        }else if(this.props.render === 'pending'){
            
            return(                      
                <div>
                    {this.props.showPendig.map((element, index) =>{               
                        return <SubTask 
                            task={element}                                                 
                            key={index} 
                            deleteTask={this.props.deleteTask}
                            updateTask ={this.props.updateTask}
                        />                    
                    })}
                </div>
            )

        }else{
            return(                      
                <div>
                    {this.props.showTasks.map((element, index) =>{               
                        return <SubTask 
                            task={element}                                                 
                            key={index} 
                            deleteTask={this.props.deleteTask}
                            updateTask ={this.props.updateTask}
                        />                    
                    })}
                </div>
            )       
        }
    }
}

export default SubTaskList;