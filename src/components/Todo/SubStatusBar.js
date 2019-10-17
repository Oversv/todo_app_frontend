import React from 'react';

class SubStatusBar extends React.Component{
    render(){
        return(            
            <div className="row m-3">
                <div className="col-12">
                    <p className="m-0 p-1">You have X incomplete task</p>
                </div>
            </div>
        )
    }
}

export default SubStatusBar ;