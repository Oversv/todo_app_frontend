import React from 'react';

class SubTask extends React.Component{ 

    render(){ 
        let circleState = "red";
        let taskCompleted = null; 

        if(this.props.task.done){
            circleState="green";
            taskCompleted = "task-completed";
        }    

        return(      
            <div className="row align-items-center mt-2 mb-2">
                <div className="col-1 p-0 d-flex justify-content-end">
                    <button 
                        className={"circle " + circleState}
                        onClick={this.props.updateTask.bind(this, this.props.task.taskId)}
                        ></button>
                </div>
                <div className="col-9">
                    <p className={"m-0 p-2 task " + taskCompleted}>{this.props.task.taskDescription}</p>                    
                </div>
                <div className="col-2 p-0">
                    <i className="fas fa-trash-alt fa-lg d-block d-md-none pointer btn-awesome" 
                     onClick={this.props.deleteTask.bind(this, this.props.task.taskId)}></i>

                    <input type="button" className="btn btn-primary btn-sm d-none d-md-block p-2" value="Delete"
                    onClick={this.props.deleteTask.bind(this, this.props.task.taskId)}
                    />
                </div>
            </div>        
        )
    }
}

export default SubTask;