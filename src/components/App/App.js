import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import Yelp from '../../util/Yelp';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {businesses: [],};
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.searchYelp(term, location, sortBy)
    .then(businesses => {
      this.setState({businesses: businesses});
    });
  }

  render() {
    return (
        <div className="App">
          <h1>ravenous</h1>
          <SearchBar searchP={this.searchYelp} />
          <BusinessList business={this.state.businesses} />
        </div>
      );
    }
}

export default App;
