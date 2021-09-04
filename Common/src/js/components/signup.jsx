import React, { Component } from 'react';
import Footer from '../components/footer';
import { Input } from 'react-materialize';
import {
    addNewClient,
    ownerToggle,
    updateUsername,
    updatePassword,
    updateName,
    updatePhonenumber,
} from '../actions/signupActions';
import NavBar from '../index/navBarIndex';

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.handleToggle = this.handleToggle.bind(this);
        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handlePhoneNumberInput = this.handlePhoneNumberInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleToggle(event) {
        const { dispatch } = this.props;
        const value = event.target.value;
        dispatch(ownerToggle(value));
    }

    handleUsernameInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateUsername(value));

    }

    handlePasswordInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updatePassword(value));
    }

    handleNameInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateName(value));
    }

    handlePhoneNumberInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updatePhonenumber(value));
    }

    handleClick(event) {
        event.preventDefault();
        const { dispatch, owner, name, email, password, phone_number } = this.props;
        dispatch(addNewClient(owner, name, email, password, phone_number ));
    }


    render() {
        const {owner, name, email, password, phone_number,  activeOwner, activeCustomer, shoppingCart} = this.props;
        return (
            <div>
                <NavBar/>
                <div className="container valign-wrapper" id='full-page'>
                    <div className="container">
                        <div className="row">
                            <div className="card col s6 offset-s3">
                                <div className="card-content">
                                    <span className="card-title white-text center"><strong>Create An Account</strong></span>
                                    <hr/>
                                    <form id='signup-form' onSubmit={this.handleClick}>
                                        <div className="container">
                                            <div className='white-text'>
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
                                                <input type="email" name='username' id='email' value={email} onChange={this.handleUsernameInput} required/>
                                                <label htmlFor="email"><strong>Email:</strong></label>
                                            </div>
                                            <div className="input-field">
                                                <input type="password" name='password' id='password' value={password} onChange={this.handlePasswordInput} required/>
                                                <label htmlFor="passowrd"><strong>Password:</strong></label>
                                            </div>
                                            <div className="input-field">
                                                <input type="text" name='name' id='name' value={name} onChange={this.handleNameInput} required/>
                                                <label htmlFor="name"><strong>Name:</strong></label>
                                            </div>
                                            <div className="input-field">
                                                <input type="number" name='phonenumber' id='phone_number' value={phone_number} onChange={this.handlePhoneNumberInput}/>
                                                <label htmlFor="phonenumber"><strong>Phone Number:</strong></label>
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="card-action center">
                                            <a href='#/'><button className="btn btn-primary" type='submit'>Sign Up</button></a>
                                        </div>
                                    </form>
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