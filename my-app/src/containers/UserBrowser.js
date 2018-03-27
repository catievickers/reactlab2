import React, { Component } from 'react';

//We have to import the component we just created
import UserListItem from '../containers/UserListItem.js';
import UserDetails from '../containers/UserDetails.js';

/*  
Axios is a popular package for working with external API's (web services).
It needs to be installed into our application via npm, which you have already done back in Exercise 20c.2
*/
import axios from 'axios';

class UserBrowser extends Component {
    constructor(props){
        super(props);
        // in our state, store list of users and the currently selected user 
        this.state = {
            currentUserId: 1,
            users: []
        };
        this.handleSelect = this.handleSelect.bind(this);
    } 
    /*
    This React lifecycle event method is called *after* a component is mounted (that is, inserted into the DOM).
    This is called *after* the render, though render will happen again after this event as well.
    It is typical to make calls to external web services during this event.
    */
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            this.setState({users:response.data});
        })
        .catch(function (error){
            alert('Error with api call ... error=' + error);
        });
    }
    /*
    Each UserListItem can generate a selection/click event, which we, the parent, must handle.
    This passed key parameter will contain the user.id value of the selected user.
    */
    handleSelect(key){
        this.setState({ currentUserId: key});
    }
    //The render for this component will loop through our data and generate the appropriate UserList elements
    render (){
        /*
        Since render() happens before we mount (i.e., get data), we must handle the possibility that we don't have any user data yet.
        If that is the case, then we simply return null
        */
        if (! this.state.users || this.state.users.length === 0){
            return null;
        }else{
            let currentID = this.state.currentUserId;
            let currentUser = this.state.users.find(function(user){
               return user.id === currentID; 
            });
            //display list of users
            return (
                <article className="section columns">
                <section className="column is-one-third">
                    <nav className="panel">
                        <h3 className="panel-heading">Users</h3>
                        {
                            //Loop through the users retrieved from our API and generate a UserListItem component for each user
                            this.state.users.map( (user, ind) => {
                               let activeClass ="";
                               if (user.id === currentID) activeClass ="is-active";
                               return (
                                <UserListItem key={user.id} index={ind}
                                    identifier={user.id}
                                    active={activeClass}
                                    select={this.handleSelect}
                                    >{user.name}</UserListItem>
                               );
                            })
                        }
                    </nav>
                </section>
                <section className="column is-two-thirds" >
                    <UserDetails user={currentUser} />
                </section>
                </article>
            );
        }
    } //End Render
} //End Class

export default UserBrowser;
