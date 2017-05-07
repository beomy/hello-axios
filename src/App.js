import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/Button';
import * as service from './services/user';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
    };
  }

  onIncrement = (event) => {
    this.fetchUserInfo(this.state.id + 1);
  }

  onDecrement = (event) => {
    this.fetchUserInfo(this.state.id - 1);
  }

  fetchUserInfo = async (id) => {
    const info = await Promise.all([
      service.getUser(id),
      service.getFriend(id)
    ]);
    
    this.setState(prevState => ({
      id: id,
      name: info[0].data.name
    }));

    console.log(info);
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <Button onIncrement={this.onIncrement} onDecrement={this.onDecrement} />
      </div>
    );
  }
}

export default App;
