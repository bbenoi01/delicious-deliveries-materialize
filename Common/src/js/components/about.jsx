import React, { Component } from 'react';
import NavBar from '../index/navBarIndex';
import Footer from '../components/footer';

export default class About extends Component {
    constructor(props) {
        super(props);
    
    
    }

    render() {
        const { activeOwner, activeCustomer, shoppingCart } = this.props;
        return (
            <div>
                <NavBar/>
                <div className="valign-wrapper" id='full-page'>
                    <div className="row">
                        <div className="col s8 offset-s2">
                            <div className="card">
                                <div className="card-content white-text">
                                    <p>Delicious Deliveries was created magically by banging on a keyboard! If you have any questions, comments, or concerns feel free to drop us a message.</p>
                                    <br/>
                                    <div className="center-align">
                                        <a href="#/contact" className='btn waves-effect waves-light'>Contact Us</a>
                                        <br/>
                                        <br/>
                                        <a href="#/" className="btn waves-effect waves-light">Back to Home</a>
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