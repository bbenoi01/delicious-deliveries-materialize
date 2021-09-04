import { connect } from 'react-redux';
import Landing from '../components/landing';

function mapStoreToProps(store) {
  return {
    activeOwner: store.login.activeOwner,
    activeCustomer: store.login.activeCustomer,
    shoppingCart: store.restaurantDetails.shoppingCart,
  };
}

export default connect(mapStoreToProps)(Landing);