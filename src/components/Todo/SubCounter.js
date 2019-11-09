import React from 'react';

class SubCounter extends React.Component{
    render(){
        let counter = 0;
        let text = "";
     
        if(this.props.render === 'completed'){
            counter = this.props.counter.completedTasks.length;
            text = `You have ${counter} completed tasks`;

        }else if(this.props.render === 'pending'){           
            counter = this.props.counter.pendingTasks.length;
            text = `You have ${counter} pending tasks`;

        }else{
            counter = this.props.counter.tasks.length;
            text = `You have ${counter} tasks`;
        }
        return(            
            <div className="row m-3">
                <div className="col-12">
                    <h2 className="m-0 p-3 h2">{text}</h2>
                </div>
            </div>
        )
    }
}

export default SubCounter ;