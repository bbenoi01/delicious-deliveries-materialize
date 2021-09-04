import React from 'react';
import { Link } from 'react-router-dom';
import { chooseRestaurant, getMenuItems } from '../actions/restaurantDetailsActions';
import NavBar from '../index/navBarIndex';
import Footer from '../components/footer';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.selectRestaurant = this.selectRestaurant.bind(this);
  }

  selectRestaurant(e){
    const { dispatch, restaurants } = this.props;
    const index = restaurants.map(restaurant => restaurant.id).indexOf(e.target.id);
    console.log(restaurants[index].id);
    dispatch(chooseRestaurant(restaurants[index]));
    dispatch(getMenuItems(restaurants[index].id))
  }


  render() {
    const { restaurants, activeOwner, activeCustomer, shoppingCart } = this.props;
    console.log(restaurants);
    return (
      <div>
        {/* TOP NAV BAR */}
        <section>
        <NavBar/>
        </section>
        <section>
          <div className='container valign-wrapper' id='full-page'>
          <br/>
            <div className="row">
            {!!restaurants && restaurants.map(restaurant =>
              <div key={restaurant.id} className="col s6">
                <div className="card">
                  <div className="card-title white-text center">
                    <strong><span>Search Results</span></strong>
                  </div>
                  <hr/>
                  <div className="card-content">
                    <div className="row center-align">
                      {/* IMAGE */}
                      <div className="col s4 left">
                      { restaurant.image == '' ?
                        <img className="img-fluid" src='http://sulaindianrestaurant.com/wp-content/uploads/2013/07/menu-placeholder.gif' alt={restaurant.name} /> :
                        <img className="img-fluid" src={restaurant.image} alt={restaurant.name} />
                      }
                      </div>
                      {/* RESTAURANT INFORMATION */}
                      <div className="col s8 right white-text">
                        <div className="center">
                          <h5>{restaurant.name}</h5>
                        </div>
                        <div>
                          <h6>{restaurant.address1} {restaurant.city}, {restaurant.state} {restaurant.zip}</h6>
                        </div>
                        <div className="center">
                          <Link to={'/restaurant/' + restaurant.id}>
                            <button id={restaurant.id} className="btn waves-effect waves-light" type="button" onClick={ this.selectRestaurant }>
                              See Menu
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            </div>
          </div>
        </section>
        {/* FOOTER:  */}
        <section>
          <Footer /> 
        </section>
      </div >
    )
  }
}
