import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="navbar-fixed bottom opacity transparent">
                <nav className='opacity'>
                    <div className="nav-wrapper center-align black-text">
                        <a className='black-text' href="#/about">About Us </a>||
                        <a className='black-text' href="#/contact"> Contact Us</a>
                    </div>
                </nav>
            </div>
        );
    }
}