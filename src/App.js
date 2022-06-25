import React, { Component} from 'react';
import './App.css';
// import Home from './Components/Home';
import axios from 'axios';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      loading: false,
    };
  }

  getUsers () {
      this.setState({loading: true});
      axios('https://api.randomuser.me/?nat=US&results=5').then(response =>
      this.setState({users: response.data.results,
      loading: false}));
  }

  componentWillMount () {
    this.getUsers();
  }

  render () {
    return (<div className="App">
      {!this.state.loading ? this.state.users.map(user => (
        <div>
        <h3>{user.cell}</h3>
        </div>
        )
        ) : <div><h3>Loading...</h3></div>}
        </div>
    );
  }}

export default App;
