import React from 'react';

const HeaderBar = function (props) {
    return (
        <nav className="navbar is-primary">
            <div className="navbar-brand">
                <a className="navbar-item">
                    <span className="icon">
                        <i className="fab fa-lg fa-react"></i>
                    </span>
                </a>
                <a className="navbar-item">
                    <h1 className="title">More React</h1>
                </a>
            </div>
        </nav>
    );
}

export default HeaderBar;