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


  render() {
    return(
      <form>
        <h3>Make a Reservation</h3>
        <input placeholder='name' name="name" type="text" />
        <input placeholder='date' name='date' type='date' />
        <input placeholder='time' name='time' type='number' />
      </form>
    ) 
  }
}


export default MakeReservation
