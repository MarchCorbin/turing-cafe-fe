import React from 'react'
import { render } from '@testing-library/react'
import './Reservations.css'

class Reservations extends React.Component {
  constructor() {
    super()
    this.state = {
     reservations: []
    }
  }

  mapResys = () => {
    if(this.state.reservations.length > 0) {
      return this.state.reservations.map(resy => {
     return( <div className='eachres'>
        <h3>Name:{resy.name}</h3>
        <p>Date:{resy.date}</p><br>
        </br>
        <p>Time:{resy.time}</p>
        <p>Number:{resy.number}</p>
      </div>)
       })
    }
  }
  


  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => res.json())
      .then(data => this.setState({
            reservations: data
      }))
    }


render() {
  return(
    <div className='res-container'>
      {this.mapResys()}
    </div>
   
  )
}

}
export default Reservations