import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import ArchivePost from './Archive-post'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Form/>
          <ArchivePost/>
      </div>
    );
  }
}

export default App;
