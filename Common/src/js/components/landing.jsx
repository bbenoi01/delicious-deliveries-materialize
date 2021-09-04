import React, { Component } from 'react';
import Searchbar from '../index/searchBarIndex';
import NavBar from '../index/navBarIndex';
import Footer from '../components/footer';

export default class Landing extends Component {
    constructor(props) {
        super(props);
    
    
    }

    render() {
        const { activeOwner, activeCustomer, shoppingCart } = this.props;
        return (
            <div>
                <NavBar/>
                <div className='valign-wrapper' id='full-page'>
                    <div className="container">
                        <div className="row">
                            <div className="col s6 center-align offset-s3">
                                <h3 id='title'><strong>Delicious Deliveries</strong></h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s6 offset-s3">
                                <div className="input-group">
                                <Searchbar/>
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
