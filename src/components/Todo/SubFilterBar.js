import React from 'react';

class SubFilterBar extends React.Component{
    render(){

        return(            
            <div className="row d-flex p-3 justify-content-center">
                <input 
                    type="button" 
                    className="btn btn-primary btn-sm" 
                    value="Pending"
                    onClick={this.props.pendingTasks}
                    />
                <input 
                    type="button" 
                    className="btn btn-primary btn-sm" 
                    value="Completed"
                    onClick={this.props.completedTasks}
                    />
                <input 
                    type="button" 
                    className="btn btn-primary btn-sm" 
                    value="All"
                    onClick={this.props.allTasks}
                    />
                <input 
                    type="button" 
                    className="btn btn-primary btn-sm" 
                    value="Delete All"
                    onClick={this.props.deleteAll}
                    />
            </div>
        )
    }
}

export default SubFilterBar;
