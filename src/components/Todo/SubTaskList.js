import React from 'react';
import SubTask from './SubTask';

class SubTaskList extends React.Component{
    render(){

        let show = "";

        if(this.props.render === 'completed'){
            show = this.props.showCompleted;      

        }else if(this.props.render === 'pending'){
            show = this.props.showPendig;  

        }else{
            show = this.props.showTasks;             
        }

        return(                      
            <div>
                {show.map((element, index) =>{               
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