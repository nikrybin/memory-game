import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { startGame, resetGame } from '../../Redux/Actions/gameActions'
import '../../Assets/Styles/Button.scss'

const Button = ({ startGame, isStarted, resetGame, isWon }) => {
  Button.propTypes = {
    isStarted: PropTypes.bool.isRequired,
    isWon: PropTypes.bool.isRequired,
    resetGame: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired,
  }

  const handleStart = () => startGame()

  const handleReset = () => resetGame()

  return (
    <div className='button__wrapper'>
      {isStarted ? (
        <button
          className={`button ${isWon ? 'button_animation_blink' : ''}`}
          onClick={handleReset}
        >
          Reset
        </button>
      ) : (
        <button className='button button_animation_blink' onClick={handleStart}>
          Start
        </button>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  isStarted: state.isStarted,
  isWon: state.isWon,
})

const mapDispatchToProps = {
  resetGame,
  startGame,
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)
