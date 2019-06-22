import React, { Component } from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, IconButton, Collapse } from '@material-ui/core';
import StatsTable from './StatsTable';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class Pokemon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      sprite: '',
      stats: {
        speed: 0,
        specialDefense: 0,
        specialAttack: 0,
        defense: 0,
        attack: 0,
        hp: 0,
      },
      types: [],
      expanded: false
    }
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/' + this.state.name)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        var state = this.state;
        state.sprite = json.sprites.front_default;
        state.name = json.species.name;
        state.stats.speed = json.stats[0].base_stat;
        state.stats.specialDefense = json.stats[1].base_stat;
        state.stats.specialAttack = json.stats[2].base_stat;
        state.stats.defense = json.stats[3].base_stat;
        state.stats.attack = json.stats[4].base_stat;
        state.stats.hp = json.stats[5].base_stat;
        this.setState(state);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleExpandClick() {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    return (
      <Card style={{maxWidth: '100%', margin: 10, marginTop: 20}}>
        <CardMedia style={{height: 175, backgroundSize: 125}} 
                   image={this.state.sprite || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/0.png'} />
        <CardContent>
          <Typography style={{textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold'}}>
            {this.state.name}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={this.handleExpandClick}>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <StatsTable speed={this.state.stats.speed}
                        attack={this.state.stats.attack}
                        defense={this.state.stats.defense}
                        specialAttack={this.state.stats.specialAttack}
                        specialDefense={this.state.stats.specialDefense}
                        hp={this.state.stats.hp} />
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}
