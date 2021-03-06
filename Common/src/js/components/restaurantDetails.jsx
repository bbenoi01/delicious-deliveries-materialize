import React from 'react';
import { addShoppingCart, updateShoppingCart } from '../actions/restaurantDetailsActions';
import NavBar from '../index/navBarIndex';
import Footer from '../components/footer';

export default class RestaurantDetails extends React.Component {
  constructor(props) {
    super(props);
  //bind functions here
this.addCart = this.addCart.bind(this);
  }

  addCart(e){
    const { dispatch, shoppingCart, menuItems } = this.props;
    let cart = shoppingCart.slice();
    const cartIndex = cart.map(item => item.id).indexOf(e.target.id);
      if(cartIndex === -1){
        const index = menuItems.map(item => item.id).indexOf(e.target.id);
        const cartItem = {
          quantity: 1,
          menuItem: menuItems[index].name,
          price: menuItems[index].price,
          id: e.target.id
        };
        dispatch(addShoppingCart(cartItem));
    } else {
      cart[cartIndex].quantity++;
      if (cart[cartIndex].quantity > 10 ) cart[cartIndex].quantity = 10;
        dispatch(updateShoppingCart(cart));
    }
  }

  render() {
    const { activeOwner, activeCustomer, menuItems, chosenRestaurant, shoppingCart } = this.props;
    console.log(4, menuItems);
    console.log(69, chosenRestaurant);
    const breakfastList = menuItems.filter(item => item.category === 'Breakfast');
    const lunchList = menuItems.filter(item => item.category === 'Lunch');
    const dinnerList = menuItems.filter(item => item.category === 'Dinner');
    const snackList = menuItems.filter(item => item.category === 'Snack');
    const drinkList = menuItems.filter(item => item.category === 'Drink');
    return(
      <div>
        <NavBar/>
        <div className="container" id='full-page'>
            <h1 className='center'>{ chosenRestaurant.name }</h1>
            <div className='row'>
              <div className='col s6'>
              { chosenRestaurant.image == '' ?
                <img src='http://sulaindianrestaurant.com/wp-content/uploads/2013/07/menu-placeholder.gif' className="img-fluid" alt="Responsive image" />:
                <img src={ chosenRestaurant.image } className="img-fluid" alt="Responsive image" />
              }
              </div>
              <div className='center col s4'>
                <div className="card">
                  <p>{ chosenRestaurant.address1 }</p>
                  <p>
                    { chosenRestaurant.city + ', ' + chosenRestaurant.state + ' ' + chosenRestaurant.zip }
                  </p>
                  <p>{ chosenRestaurant.phone_number }</p>
                  <p>{ chosenRestaurant.food_type }</p>
                  <div className="card-footer">
                  <a className='btn btn-primary mx-2' href='#/searchresults' role='button'>Go Back</a>
                  <a className='btn btn-primary mx-2' href='#/shoppingcart' role='button'>Shopping Cart</a>
                  </div>
                </div>
              </div>
            </div>
            { breakfastList.length > 0 ?
            <div className='card col s12'>
              <div>
                <h4>Breakfast</h4>
                <hr/>
              </div>
              <div className='row'>
              { breakfastList.map((item, index) => 
                  <div className='col s6 d-flex' key={ index }>
                    <span><p><strong>{ item.name }</strong></p></span>
                    <div>
                      <span>${item.price}</span>
                      <button id={ item.id } className='btn btn-primary btn-sm' onClick={ this.addCart }>Add to Cart</button>
                    </div>
                  </div>
                  )}   
              </div>
            </div>
            : <div />}
            { lunchList.length > 0 ?
            <div className='card col s12'>
              <div>
                <h4>Lunch</h4>
                <hr/>
              </div>
              <div className='row'>
              { lunchList.map((item, index) => 
                <div className='col s6 d-flex' key={ index }>
                  <span><p><strong>{ item.name }</strong></p></span>
                  <div>
                    <span>${item.price}</span>
                    <button id={ item.id } className='btn btn-primary btn-sm' onClick={ this.addCart }>Add to Cart</button>
                  </div>
                </div>
                )}
              </div>
            </div>
            : <div />}
            { dinnerList.length > 0 ?
              <div className='card col s12'>
                <div>
                  <h4>Dinner</h4>
                  <hr/>
                </div>
                <div className='row'>
                { dinnerList.map((item, index) => 
                  <div className='col s6 d-flex' key={ index }>
                    <span><p><strong>{ item.name }</strong></p></span>
                    <div>
                      <span>${item.price}</span>
                      <button id={ item.id } className='btn btn-primary btn-sm' onClick={ this.addCart }>Add to Cart</button>
                    </div>
                  </div>
                  )}
                </div>
              </div>
            : <div />}
            { snackList.length > 0 ?
              <div className='card col s12'>
                <div>
                  <h4>Snacks</h4>
                  <hr/>
                </div>
                <div className='row'>
                { snackList.map((item, index) => 
                  <div className='col s6 d-flex' key={ index }>
                    <span><p><strong>{ item.name }</strong></p></span>
                    <div>
                      <span>${item.price}</span>
                      <button id={ item.id } className='btn btn-primary btn-sm' onClick={ this.addCart }>Add to Cart</button>
                    </div>
                  </div>
                  )}
                </div>
              </div>
            : <div />}
            { drinkList.length > 0 ?
              <div className='card col s12'>
                <div>
                  <h4>Drink</h4>
                  <hr/>
                </div>
                <div className='row'>
                { drinkList.map((item, index) => 
                  <div className='col s6 d-flex' key={ index }>
                    <span><p><strong>{ item.name }</strong></p></span>
                    <div>
                      <span>${item.price}</span>
                      <button id={ item.id } className='btn btn-primary btn-sm' onClick={ this.addCart }>Add to Cart</button>
                    </div>
                  </div>
                  )}
                </div>
              </div>
            : <div />}
          </div>
          <Footer />
      </div>
    )
  }
}