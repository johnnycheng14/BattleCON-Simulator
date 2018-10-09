import React, { Component } from 'react'
import { connect } from 'react-redux'

class Board extends Component {
  handleChange() {

  }

  render() {
    return (
      <div className='playerContainer'>
        <b>Player 1</b>
         
        <button className='meter' id='increase'><i class="left chevron icon"></i></button>
        <button className='meter' id='decrease'><i class="right chevron icon"></i></button>
        
        <button className='meter' id='increase'><i class="left chevron icon"></i></button>
        <button className='meter' id='decrease'><i class="right chevron icon"></i></button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  player1: state.user,
  player2: state.user
})

export default connect(mapStateToProps)(Board)