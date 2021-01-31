import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import '../../Assets/Styles/Moves.scss'

const Moves = ({ moves }) => {
  Moves.propTypes = {
    moves: PropTypes.number.isRequired,
  }
  return <div className='moves'>Moves: {moves}</div>
}

const mapStateToProps = (state) => ({
  moves: state.moves,
})

export default connect(mapStateToProps)(Moves)
