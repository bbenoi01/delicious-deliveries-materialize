import React, { Component } from 'react';
import {signOut} from '../actions/loginActions';

export default class NavBar extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const {dispatch} = this.props;
        dispatch(signOut());
    }


    render() {
        const { shoppingCart, activeOwner, activeCustomer, currentOwnerId } = this.props;
        if (activeCustomer == false && activeOwner == false) {
            return (
                <div className="navbar-fixed opacity transparent">
                    <nav className='opacity'>
                        <div className="nav-wrapper">
                            <ul className="left">
                                <li><a className='black-text text-black' href="#/">Delicious Deliveries</a></li>
                                <li><a className='black-text text-black' href="#/shoppingcart"><img src="../cart.png" /><strong>({shoppingCart.length})</strong></a></li>
                            </ul>
                            <ul id='nav-mobile' className="right hide-on-med-and-down">
                                <li><a className='black-text text-black' href='#/login'>Login</a></li>
                                <li><a className='black-text text-black' href='#/signup'>Sign Up</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            );
        } else if (activeOwner == true) {
            return (
                <div className="navbar-fixed opacity transparent">
                    <nav className='opacity'>
                        <div className="nav-wrapper">
                            <ul className="left">
                                <li><a className='black-text text-black' href="#/">Delicious Deliveries</a></li>
                                <li><a className='black-text text-black' href="#/shoppingcart"><img src="../cart.png" /><strong>({shoppingCart.length})</strong></a></li>
                            </ul>
                            <ul className="right hide-on-med-and-down">
                                <li><a className='black-text text-black'>Welcome</a></li>
                                <li><a className='black-text text-black' href={`#/owner/${currentOwnerId}/updateOwnerInfo`}>Account</a></li>
                                <li><a className='black-text text-black' onClick={this.handleClick}>Sign Out</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            );
        } else if (activeCustomer == true) {
            return (
                <div className="navbar-fixed opacity transparent">
                    <nav className='opacity'>
                        <div className="nav-wrapper">
                            <ul className="left">
                                <li><a className='black-text text-black' href="#/">Delicious Deliveries</a></li>
                                <li><a className='black-text text-black' href="#/shoppingcart"><img src="../cart.png" /><strong>({shoppingCart.length})</strong></a></li>
                            </ul>
                            <ul className="right hide-on-med-and-down">
                                <li><a className='black-text text-black'>Welcome</a></li>
                                <li><a className='black-text text-black' onClick={this.handleClick}>Sign Out</a></li>
                            </ul>    
                        </div>
                    </nav>
                </div>
            );
        }
    }
}
