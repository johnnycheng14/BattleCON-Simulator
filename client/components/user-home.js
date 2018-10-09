import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Board from './game'
/**
 * COMPONENT
 */
export const UserHome = props => {
  const {username} = props

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <Board />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.user.username
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  username: PropTypes.string
}
