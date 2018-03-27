import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            Home: []
        };
    }
    
    
    render (){
        return (
            <article className="section columns">
                <div className="column card">
                    {/*Card for Users*/}
                    <figure className="image is-3by3">
                        <img src=" https://placeimg.com/640/480/people/grayscale" alt="Portfolio" />
                    </figure>
                <div className="card-content">
                    <div classNameclassName="media">
                          <div className="media-content">
                            <br/>
                            <NavLink to="/users" className="button is-primary is-fullwidth" >View Users</NavLink>
                          </div>
                    </div>
                </div>
                </div>
                <div className="column card">
                    {/*Card for Companiess*/}
                    <figure className="image is-3by3">
                        <img src="https://placeimg.com/640/480/tech/grayscale" alt="Portfolio" />
                    </figure>
                <div className="card-content">
                    <div classNameclassName="media">
                          <div className="media-content">
                            <br/>
                            <NavLink to="/companies" className="button is-primary is-fullwidth" >View Companies</NavLink>
                          </div>
                    </div>
                </div>
                </div>
                <div className="column card">
                    {/*Card for Portfolio*/}
                    <figure className="image is-3by3">
                        <img src="https://placeimg.com/640/480/arch/grayscale" alt="Portfolio" />
                    </figure>
                <div className="card-content">
                    <div classNameclassName="media">
                          <div className="media-content">
                            <br/>
                            <NavLink to="/portfolios" className="button is-primary is-fullwidth" >View Portfolio.</NavLink>
                          </div>
                    </div>
                </div>
                </div>
            </article>
            
        );
    }
}

export default Home;