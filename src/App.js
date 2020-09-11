import React, { Component } from 'react';
import {Container, Row} from 'reactstrap';
import Header from './components/Header';
import Map from './components/Map';

import './App.css';

require('dotenv').config()

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      applicationName: 'TrafficMap'
    }
  }
}

export default App;
