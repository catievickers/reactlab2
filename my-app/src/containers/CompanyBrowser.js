import React, { Component } from 'react';

class CompanyBrowser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: []
        };
    }
    render() {
        return (
            <article className="section columns">
                companies here
            </article>
        );
    }
}
export default CompanyBrowser;