import React, { Component } from 'react';

class UserListItem extends Component {
    //The parent for this component wil handle the selection/click event
    handleSelectUser = (key) => {
        this.props.select(key);
    }
    render(){
        let classes = "panel-block ";
        classes += this.props.active;
        //To pass a custom parameter to an eventhandler, we can wrap the call in an arrow function
        return(
            <a className={ classes}  
            onClick={() => this.props.select(this.props.identifier)} 
            >
               
                {this.props.children}
            </a>
        );
    }
}

export default UserListItem