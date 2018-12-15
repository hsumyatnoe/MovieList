import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './controlled_component/index';


class App extends Component {
  render() {
    return (
      <div>
        <MovieList/>
      </div>
    );
  }
}

export default App;
