import React, { Component } from 'react';
import Pokemon from './Pokemon';
import { Container, GridList, GridListTile } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

class PokemonView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: props.pokemon
    }
    this.getCols = this.getCols.bind(this);
  }

  getCols() {
    if (isWidthUp('md', this.props.width)) {
      return 3;
    }
    else if (isWidthUp('sm', this.props.width)) {
      return 2;
    }
    else if (isWidthUp('xs', this.props.width)) {
      return 1;
    }
  }

  componentWillReceiveProps({ pokemon }) {
    this.setState({...this.state, pokemon})
  }

  render() {
    return(
      <Container fixed style={{paddingBottom: 20, marginTop: 75}}>
        <GridList cols={this.getCols()}>
          {this.state.pokemon.map((name) => (
            <GridListTile style={{height: '100%'}} key={name}>
              <Pokemon name={name} />
            </GridListTile>
          ))}
        </GridList>
      </Container>
    );
  }

}

export default withWidth()(PokemonView);