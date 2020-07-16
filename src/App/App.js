import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations';
import MakeReservation from '../MakeReservation/MakeReservation';


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <MakeReservation />
        </div>
        <div className='resy-container'>
        <Reservations />
        </div>
      </div>
    )
  }
}

export default App;
