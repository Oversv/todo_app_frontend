import React from 'react';
import SubTask from './SubTask';

class SubTaskList extends React.Component{
    render(){
        return(            
            <div>
                {this.props.tasks.map(function(task, index){
                   
                    return <SubTask task={task} key={index}/>
                    
                })}
            </div>
        )
    }
}

export default SubTaskList;