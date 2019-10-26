import React from 'react';
import SubTask from './SubTask';

class SubTaskList extends React.Component{
    render(){
        return(            
            <div>
                {this.props.tasks.map((element, index) =>{               
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

export default SubTaskList;