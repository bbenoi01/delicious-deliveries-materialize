import React, { Component } from 'react';
import Footer from '../components/footer';
import { Input } from 'react-materialize';
import {
    ownerLoginToggle,
    updateLoginUsername,
    updateLoginPassword,
    loginAuth,
} from '../actions/loginActions';
import NavBar from '../index/navBarIndex';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.handleToggle = this.handleToggle.bind(this);
        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleToggle(event) {
        const { dispatch } = this.props;
        const value = event.target.value;
        dispatch(ownerLoginToggle(value));
    }

    handleUsernameInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateLoginUsername(value));
    }

    handlePasswordInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateLoginPassword(value));
    }

    handleClick(event) {
        event.preventDefault();
        const { dispatch, owner, email, password } = this.props;
        dispatch(loginAuth(email, password, owner));
    }
    render() {
        const {owner, email, password, activeOwner, activeCustomer, shoppingCart} = this.props;
        return (
            <div>
                <NavBar/>                      
                <div className="container valign-wrapper" id='full-page'>
                    <div className="container">
                        <div className="row">
                            <div className=" card col s6 offset-s3">
                                <div className="card-content">
                                    <span className="card-title white-text center"><strong>Login</strong></span>
                                    <hr/>
                                    <form id='login-form' onSubmit={this.handleClick}>
                                        <div className="container">
                                            <div className="white-text">
                                                <Input type='select' s={12} id="owner" value={owner} onChange={this.handleToggle}>
                                                    <option value="" disabled selected>Select Account Type</option>
                                                    <option value="false">Customer</option>
                                                    <option value="true">Owner</option>
                                                </Input>
                                                <br/>
                                                <br/>
                                            </div>
                                        </div>
                                        <div className="white-text">
                                            <div className="input-field">
                                                <label htmlFor="username"><strong>Email:</strong></label><br/>
                                                <input type="email" name='username' value={email} onChange={this.handleUsernameInput}/>
                                            </div>
                                            <div className="input-field">
                                                <label htmlFor="password"><strong>Password:</strong></label><br/>
                                                <input type="password" name='password' value={password} onChange={this.handlePasswordInput}/>
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="card-action center">
                                            <a href='#/'><button className="btn btn-primary">Sign In</button></a>
                                        </div>
                                    </form>
                                    <div className='white-text center'>
                                        Need an account? <a href="#/signup">Sign up</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <Footer />               
            </div>
        );
    }
}