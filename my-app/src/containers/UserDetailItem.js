/*
Each UserDetailItem contains an input element (and a bunch of associate other CSS styling markup).
It has one state value, which will contain the current value of the input element.
Notice that we are using value instead of defaultValue.
A defaultValue cannot be changed so that is why we are using value instead
*/

/*
When the user makes a change to the <input>value, our code will now call the handleChange() method,
which in turn will call the method that was passed to it by the parent component
*/

import React, { Component } from 'react';

class UserDetailItem extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {currentValue: props.currentValue };
    }
    
    handleChange(e){
        //Save the new value in our state
        this.setState({currentValue: e.target.value});
        //And call the event handler passed to us by the parent
        this.props.handleTextChange(e.target.value, this.props.identifier);
    }
    render(){
        return(
            <div className= "field">
                <label className="label">{this.props.label}</label>
                <div className = "control has-icons-left">
                    <input className = "input"
                        type = {this.props.type}
                        ref = {this.props.identifier}
                        placeholder = {this.props.place}
                        value = {this.props.currentValue}
                        onChange={this.handleChange}/>
                    <span className="icon is-small is-left">
                        <i className = {"fas " + this.props.icon}></i>
                    </span>
                </div>
            </div>
        );
    }
}

export default UserDetailItem;