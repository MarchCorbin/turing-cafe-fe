import React from 'react'

class MakeReservation extends React.Component{
  constructor(){
    super()
    this.state = {
      name: null,
      date: null,
      time: null,
      number: this.numberAssign()
    }
  }

  numberAssign(){
    let num = 0
    this.setState({number:num++})
  }

  submitHandler() {
    
  }

  render() {
    return(
      <form onSubmit={this.submitHandler}>
        <h3>Make a Reservation</h3>
        <input placeholder='name' name="name" type="text" />
        <input placeholder='date' name='date' type='date' />
        <input placeholder='time' name='time' type='number' />
        <button type='submit'></button>
      </form>
    ) 
  }
}


export default MakeReservation
