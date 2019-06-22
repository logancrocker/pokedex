import React, { Component } from 'react';
import PokemonView from './PokemonView';
//import Pokemon from './Pokemon';
import Bar from './Bar';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dexName: 'kanto',
      pokemon: [],
      searchText: ''
    }
    this.handleRegionSelect = this.handleRegionSelect.bind(this);
    this.fetchDex = this.fetchDex.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchDex();
  }

  fetchDex() {
    fetch('https://pokeapi.co/api/v2/pokedex/' + this.state.dexName)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        var pokemon = []
        json.pokemon_entries.forEach((entry) => {
          pokemon.push(entry.pokemon_species.name);
        })
        this.setState({pokemon: pokemon});
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleRegionSelect(region) {
    console.log('selected ' + region);
    this.setState({dexName: region}, () => {
      this.fetchDex();
    });
  }

  handleChange(event) {
    this.setState({searchText: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <Bar handleRegionSelect={this.handleRegionSelect} handleChange={this.handleChange} />
        <PokemonView pokemon={this.state.searchText === '' ? this.state.pokemon 
                                                           : this.state.pokemon.filter((word) => (word.includes(this.state.searchText)))} 
                     value={this.state.searchText} />
      </div>
    );
  }

}
