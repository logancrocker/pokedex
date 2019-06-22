import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles, fade } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    backgroundColor: 'red'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class Bar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      drawer: false,
      handleRegionSelect: props.handleRegionSelect,
      region: 'Kanto'
    }
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleRegionSelect = this.handleRegionSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleDrawer() {
    this.setState({drawer: !this.state.drawer});
  }

  handleRegionSelect(region) {
    switch(region) {
      case 'Kanto':
        this.props.handleRegionSelect('kanto');
        this.setState({region: region});
        break;
      case 'Johto':
          this.props.handleRegionSelect('original-johto');
          this.setState({region: region});
          break;
      case 'Hoenn':
          this.props.handleRegionSelect('hoenn');
          this.setState({region: region});
          break;
      case 'Sinnoh':
          this.props.handleRegionSelect('original-sinnoh');
          this.setState({region: region});
          break;
      case 'Unova':
          this.props.handleRegionSelect('original-unova');
          this.setState({region: region});
          break;
      case 'National':
          this.props.handleRegionSelect('national');
          this.setState({region: region});
          break;
      default:
        this.props.handleRegionSelect('kanto');
        this.setState({region: region});
        break;
    }
  }

  handleChange(event) {
    this.props.handleChange(event);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar>
          <Toolbar className={classes.toolBar}>
            <IconButton edge='start'
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='Open drawer'
                        onClick={this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant='h6' noWrap>
              Pokédex &mdash; {this.state.region}
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder='Search...'
                         classes={{
                           root: classes.inputRoot,
                           input: classes.inputInput
                         }}
                         inputProps={{'aria-label': 'Search'}}
                         onChange={this.handleChange}
                         value={this.props.value} />
            </div>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.drawer} onClose={this.toggleDrawer}>
          {
            <div onClick={this.toggleDrawer}>
              <List>
                {['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'National'].map((region) => (
                  <ListItem style={{paddingLeft: 20, marginRight: 20}} button key={region} onClick={() => this.handleRegionSelect(region)}>
                    <ListItemText primary={region} />
                  </ListItem>
                ))}
              </List>
            </div>
          }
        </Drawer>
      </div>
    );
  }

}

export default withStyles(styles)(Bar);