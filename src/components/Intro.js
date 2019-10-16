import React from 'react';

class Intro extends React.Component {
    render() {
        return ( 
            <p >{this.props.takeDescriptionIntro}</p>
        )
    }
}

export default Intro;