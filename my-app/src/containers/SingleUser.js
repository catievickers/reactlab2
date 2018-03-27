import React, { Component } from 'react';
import axios from 'axios';

class SingleUser extends Component {
    
    constructor(props) {
        super(props);
        //ADD COMMENT HERE
        this.state = {
            //Sets the state to the current user based on their ID
            currUserId: this.props.match.params.id,
            user: [],
            showAddres: false,
            showCompany: false
        };
    }
    /*
    This React lifecycle event method is called *after* a component is mounted (that is, inserted into the DOM).
    This is called *after* the render, though render will happen again after this event as well.
    It is typical to make calls to external web services during this event.
    */
    //Copied from UserBrowser.js
    componentDidMount() {
        //Sets the variable to the current user ID
        let currUserId = this.props.match.params.id;
        axios.get('https://jsonplaceholder.typicode.com/users/' + currUserId)
            .then(response => {this.setState({user:response.data});})
            //If an error occurs, display the error message
            .catch(function (error){
                alert('Error getting information ... error is' + error)
            });
    }
    //Show or hide the address of the current user
    showAddress(){
        if (! this.state.address){
            this.setState({address: true});
        }else{
            this.setState({address: false});
        }
    }
    
    //Show or hide the company of the current user
    showCompany(){
        if (! this.state.company){
            this.setState({company: true});
        }else{
            this.setState({company: false});
        }
    }
    
    render () {
        /*
        Since render() happens before we mount (i.e., get data), we must handle the possibility that we don't have any user data yet.
        If that is the case, then we simply return null
        */
        if (! this.state.user || this.state.user.length === 0) {
            return null;
        } else {
            //This will display the information for the individual user
            return (
            <div className = "section ">
                <article className = "media card section">
                    {/*This moves the entire section to the left*/}
                    <div className = "media media-left">
                        {/*This puts the image to the left of the card*/}
                        <figure className = "media-left">
                            <p className = "image is-128x128">
                                <img src = "https://bulma.io/images/placeholders/128x128.png" alt = "User" />
                            </p>
                        </figure>
                        {/*The actual information displayed - to the right of the image*/}
                        <div className = "media-content">
                            <div className = "content">
                                <p>
                                    <strong>Name: </strong>{ this.state.user.name }
                                    <br/>
                                    <strong>Username: </strong>{ this.state.user.username }
                                    <br/>
                                    <strong>Email: </strong>{ this.state.user.email }
                                    <br/>
                                    <strong>Phone: </strong>{ this.state.user.phone }
                                    <br/>
                                    <strong>Website: </strong>{ this.state.user.website }
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/*Address Information*/}
                    <div className = "media-content">
                        <article className = "message is-primary">
                            {/*Header for the media box*/}
                            <div className = "message-header" onClick = {() => this.showAddress() }>
                                <p>
                                    { this.state.user.name }'s Address
                                </p>
                                <a className = "button is-primary is-inverted">
                                    Show Address
                                </a>
                            </div>
                            { this.state.address?
                                <div className = "message-body" id = "address">
                                    <p>
                                        <strong>Street: </strong> { this.state.user.address.street }
                                        <br/>
                                        <strong>Suite: </strong> { this.state.user.address.suite }
                                        <br/>
                                        <strong>City: </strong> { this.state.user.address.city }
                                        <br/>
                                        <strong>Zipcode: </strong> { this.state.user.address.zipcode }
                                    </p>
                                </div>
                            :null }
                        </article>
                    </div>
                    {/*Company Information*/}
                    <div className = "media-content">
                        <article className = "message is-primary">
                            {/*Header for the media box*/}
                            <div className = "message-header" onClick = {() => this.showCompany() }>
                                <p>Company Information</p>
                                <a className = "button is-primary is-inverted">
                                    Show Company Information
                                </a>
                            </div>
                            { this.state.company?
                                <div className = "message-body" id = "company">
                                    <p>
                                        <strong>Company: </strong> { this.state.user.company.name }
                                        <br/>
                                        <strong>Catchphrase: </strong> { this.state.user.company.catchPhrase }
                                        <br/>
                                        <strong>Slogan: </strong> { this.state.user.company.bs }
                                    </p>
                                </div>
                            :null }
                        </article>
                    </div>
                </article>
            </div>
            );
        }
    }
}

export default SingleUser;

