import React, { Component } from 'react';
import $ from 'jquery';
import JokeList from './JokeList';
import Controls from './Controls';

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      jokes: [],
      qty: 10,
    }
    this.setQty = this.setQty.bind(this);
    this.getJokes = this.getJokes.bind(this);
  }

  componentDidMount() {
    this.getJokes();
  }

  setQty(qty) {
    //add some codes
  }

  getJokes() {
    fetch("http://api.icndb.com/jokes/random/10?exclude=[explicit]")
      .then(response => response.json())
      .then(jokesResponseObject => this.setState({ jokes: jokesResponseObject.value }))
      .catch(error => console.log('Error retreiving jokes!: ', error))
  }

  render() {
    return (
      <div>
        <h1>JOKES!</h1>
        <Controls qty={this.state.qty}
                  setQty={this.setQty}
                  getJokes={this.getJokes} />
        <JokeList jokesArray={this.state.jokes} />
      </div>
    )
  }
}
