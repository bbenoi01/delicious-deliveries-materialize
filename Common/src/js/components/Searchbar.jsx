import React, { Component } from 'react';
import { updateSearchLocation, captureLocation } from "../actions/searchBarActions";
import { Link } from 'react-router-dom';
import NavBar from '../index/navBarIndex';

export default class Searchbar extends Component {
    constructor(props) {
        super(props);

        this.changeSearchlocation = this.changeSearchlocation.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        var input = document.getElementById('searchBarInput');
        var restrictions = { componentRestrictions: { country: 'us' } };
        new google.maps.places.Autocomplete(input, restrictions);
    }

    changeSearchlocation(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(captureLocation(value));
    }


    handleClick() {
        const { dispatch } = this.props;
        var input = document.getElementById('searchBarInput').value;
        dispatch(updateSearchLocation(input));
        dispatch(captureLocation(input));
    }

    render() {
        const {location} = this.props;
        let button;
        if (location.length > 0) {
            button = <Link to={'/searchresults'}><button className="btn waves-effect waves-light" onClick={this.handleClick} type='button'>Go!</button></Link>
        }
        return (
            <div>
                <div>
                    <form>
                        <div className="row">
                            <div className="col s12 black-text">
                                <input type='text' onChange={this.changeSearchlocation} id='searchBarInput' className='validate' name='searchBarInput' vlaue={location} />
                            </div>
                            <div className='center'>
                                {button}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}