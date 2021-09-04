import React from 'react';
import { updateShoppingCart } from '../actions/restaurantDetailsActions';
import NavBar from '../index/navBarIndex';
import Footer from '../components/footer';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  //bind functions here
  this.subtractQuantity = this.subtractQuantity.bind(this);
  this.addQuantity = this.addQuantity.bind(this);
  this.removeItem = this.removeItem.bind(this);
  }

  removeItem(e) {
    const { shoppingCart, dispatch } = this.props;
    let cart = shoppingCart.slice();
    const index = cart.map(item => item.id).indexOf(e.target.id);
    cart.splice(index,1);
    dispatch(updateShoppingCart(cart));
  }

  subtractQuantity(e) {
    const { shoppingCart, dispatch } = this.props;
    let cart = shoppingCart.slice();
    const index = cart.map(item => item.id).indexOf(e.target.id);
    cart[index].quantity--;
    if (cart[index].quantity < 1 ) cart[index].quantity = 1;
    dispatch(updateShoppingCart(cart));
  }

  addQuantity(e) {
    const { shoppingCart, dispatch } = this.props;
    let cart = shoppingCart.slice();
    const index = cart.map(item => item.id).indexOf(e.target.id);
    cart[index].quantity++;
    if (cart[index].quantity > 10 ) cart[index].quantity = 10;
    dispatch(updateShoppingCart(cart));
  }

  render() {
    const { shoppingCart, activeOwner, activeCustomer } = this.props;
    let total = 0;
    shoppingCart.forEach(item => {
      let itemTotal = (item.price * item.quantity);
      total += itemTotal;
    });
      let checkoutHref = '#/login';
      if(activeCustomer==true) checkoutHref= '#/checkout';
    return(
      <div>
        <NavBar/>
        <div className='container valign-wrapper' id='full-page'>
          <div className="container">
            <div className='row'>
              <div className="card col s12">
                <div className="card-content">
                  <span className="card-title white-text center"><strong>Shopping Cart</strong></span>
                  <hr/>
                  <div className="row white-text">
                    <div className='col s4 center'>
                      <strong>Items:</strong>
                    </div>
                    <div className='col s4 center'>
                      <strong>Quantity:</strong>
                    </div>
                    <div className='col s4 center'>
                      <strong>Totals:</strong>
                    </div>
                  </div>
                  <br/>
                    {shoppingCart.map((cartItem, index) =>
                    <div key={ index } className='row white-text'>
                      <div className='col s4 center'>
                        { cartItem.menuItem }
                      </div>
                      <div className='col s4 center d-flex'>
                        <div className="row">
                          <div className="col s3">
                            <i className="fa fa-minus-square-o red" id={ cartItem.id } onClick={ this.subtractQuantity } aria-hidden="true"></i>
                          </div>
                          <div className="col s3">
                            <i className="fa fa-plus-square-o green" id={ cartItem.id } onClick={ this.addQuantity } aria-hidden="true"></i>
                          </div>
                          <div className="col s3">
                            { cartItem.quantity }
                          </div>
                          <div className="col s3">
                            <i className="fa fa-trash-o" id={ cartItem.id } onClick={ this.removeItem } aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                      <div className='col s4 center'>
                        ${ (cartItem.price * cartItem.quantity).toFixed(2) }
                      </div>
                    </div>
                    )}
                  <hr/>
                  <div className='row'>
                    <div className='col s4 center'>
                      <a className='btn btn-primary' href='#/restaurant/a' role='button'>Back to Menu</a>
                    </div>
                    <div className='col s4 center'>
                      <a className='btn btn-primary' href={ checkoutHref } role='button'>Checkout</a>
                    </div>
                    <div className='col s4 center white-text'>
                      <span>Final Total: $<strong>{ total.toFixed(2) }</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
