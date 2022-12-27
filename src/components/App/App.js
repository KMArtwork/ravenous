import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';

let business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const businessesArr = [
  business, business, business, business, business, business
];



class App extends React.Component {

  searchYelp(term, location, sortBy) {
    console.log(`Searching for ${term} in ${location}, sorted by ${sortBy}`);
  }

  render() {
    return (
        <div className="App">
          <h1>ravenous</h1>
          <SearchBar searchP={this.searchYelp} />
          <BusinessList businessP={businessesArr} />
        </div>
      );
    }
}

export default App;
