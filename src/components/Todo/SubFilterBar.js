import React from 'react';

class SubFilterBar extends React.Component{
    render(){

        return(            
            <div className="row d-flex justify-content-center">
                <input type="button" className="btn btn-primary btn-sm" value="Pending"/>
                <input type="button" className="btn btn-primary btn-sm" value="Completed"/>
                <input type="button" className="btn btn-primary btn-sm" value="All"/>
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
