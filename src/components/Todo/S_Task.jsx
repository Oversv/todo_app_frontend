import React from 'react';

class S_Task extends React.Component{
 

    render(){
        let circleState = "red";
        let taskCompleted = null;   

        if(this.props.done){
            circleState="green";
            taskCompleted = "task-completed";
        }

        return(            
            <div className="row align-items-center mt-2 mb-2">
                <div className="col-1 p-0 d-flex justify-content-end">
                    <div className={"circle pointer " + circleState}></div>
                </div>
                <div className="col-9">
                    <p className={"m-0 p-1 task " + taskCompleted}>{this.props.text}</p>
                </div>
                <div className="col-2 p-0">
                    <i className="fas fa-trash-alt fa-lg d-block d-md-none"></i>
                    <input type="button" className="btn btn-primary btn-sm d-none d-md-block" value="Delete"/>
                </div>
            </div>        
        )
    }
}

export default S_Task;