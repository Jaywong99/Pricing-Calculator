import React, { Component } from 'react';
//import PokemonSearch from './components/PokemonSearch';
import Header from './layout/header';
import Body from './layout/body';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <PokemonSearch name="John Doe" numberOfPokemons={5} /> */}
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
