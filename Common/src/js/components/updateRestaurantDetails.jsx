import React, { Component } from 'react';
import Footer from '../components/footer';
import { Input } from 'react-materialize';
import {
    foodToggle,
    updateRestaurantName,
    updateAddress1,
    updateAddress2,
    updateCity,
    updateStateInput,
    updateZipCode,
    updateImageInput,
    updatePhoneNumber,
    updateRestaurant
} from '../actions/updateRestaurantDetailsAction';
import NavBar from '../index/navBarIndex';

export default class UpdateRestaurant extends Component {
    constructor(props) {
        super(props);

        this.handleToggle = this.handleToggle.bind(this);
        this.handleRestaurantInput = this.handleRestaurantInput.bind(this);
        this.handleAddress1 = this.handleAddress1.bind(this);
        this.handleAddress2 = this.handleAddress2.bind(this);
        this.handleCityInput = this.handleCityInput.bind(this);
        this.handleStateInput = this.handleStateInput.bind(this);
        this.handleZipCodeInput = this.handleZipCodeInput.bind(this);
        this.handleImageInput = this.handleImageInput.bind(this);
        this.handlePhoneNumberInput = this.handlePhoneNumberInput.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleToggle(event) {
        const { dispatch } = this.props;
        const value = event.target.value;
        dispatch(foodToggle(value));
    }

    handleRestaurantInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateRestaurantName(value));
    }

    handleAddress1(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateAddress1(value));
    }

    handleAddress2(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateAddress2(value));
    }

    handleCityInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateCity(value));
    }

    handleStateInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateStateInput(value));
    }

    handleZipCodeInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateZipCode(value));
    }

    handleImageInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateImageInput(value));
    }

    handlePhoneNumberInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updatePhoneNumber(value));
    }

    handleClick(event) {
        event.preventDefault();
        const { dispatch, food_type, name, address1, address2, city, state, zip, image, phone_number, currentOwnerId, selectedRestaurant } = this.props;
        // const { dispatch, selectedRestaurant } = this.props;
        dispatch(updateRestaurant(food_type, name, address1, address2, city, state, zip, image, phone_number, selectedRestaurant.ownerId, selectedRestaurant.id));
    }

    render() {
        const { food_type, name, address1, address2, city, state, zip, image, phone_number, activeOwner, selectedRestaurant, shoppingCart } = this.props;
        return (
            <div>
                 <NavBar/>
                <div className="container-fluid shortbg">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-4 mb-5">
                            <div className="card text-center mt-5">
                                <div className="card-header">
                                    <strong><h1>Update {selectedRestaurant.name}</h1></strong>
                                </div>
                                <form onSubmit={this.handleClick}>
                                    <div className="card-body form-group">
                                        <Input type='select' id="food_type" value={food_type} onChange={this.handleToggle} >
                                            <option defaultValue hidden>Select Restaurant Type</option>
                                            <option value="Mexican">Mexican</option>
                                            <option value="Asian">Asian</option>
                                            <option value="BBQ">BBQ</option>
                                            <option value="American">American</option>
                                            <option value="Italian">Italian</option>
                                        </Input>
                                        <br />
                                        <br />
                                        <label htmlFor="name"><strong>Restaurant Name:</strong></label><br />
                                        <input type="text" name='name' placeholder='Enter restaurnat name...(required)' value={name} onChange={this.handleRestaurantInput} className='form-control' />
                                        <br />
                                        <label htmlFor="address-1"><strong>Address 1:</strong></label><br />
                                        <input type="text" name='address-1' placeholder='Street address...(required)' value={address1} onChange={this.handleAddress1} className="form-control" />
                                        <br />
                                        <label htmlFor="address-2"><strong>Address 2:</strong></label><br />
                                        <input type="text" name='address-2' placeholder='Unit, Spc, Suite...' value={address2} onChange={this.handleAddress2} className="form-control" />
                                        <br />
                                        <label htmlFor="city"><strong>City:</strong></label><br />
                                        <input type="text" name='city' placeholder='City...(required)' value={city} onChange={this.handleCityInput} className="form-control" />
                                        <br />
                                        <label htmlFor="state"><strong>State:</strong></label><br />
                                        <input type="text" name='state' placeholder='State...(required)' value={state} onChange={this.handleStateInput} className="form-control" />
                                        <br />
                                        <label htmlFor="zip-code"><strong>Postal Code:</strong></label><br />
                                        <input type="text" name='zip-code' placeholder='Postal code...(required)' value={zip} onChange={this.handleZipCodeInput} className="form-control" />
                                        <br />
                                        <label htmlFor="image"><strong>Image:</strong></label><br />
                                        <input type="url" name='image' placeholder='Image url...' value={image} onChange={this.handleImageInput} className="form-control" />
                                        <br />
                                        <label htmlFor="phone-number"><strong>Phone Number:</strong></label><br />
                                        <input type="number" name='phone-number' placeholder='Phone number...(required)' value={phone_number} onChange={this.handlePhoneNumberInput} className="form-control" />
                                    </div>
                                    <div className="card-footer text-muted">
                                        <a href="#/"><button className="btn btn-primary" type='submit'>Enter</button></a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
