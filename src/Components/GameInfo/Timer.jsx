import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import useTimer from '../../Hooks/useTimer'
import '../../Assets/Styles/Timer.scss'

const Timer = ({ isStarted, isReset, isWon }) => {
  Timer.propTypes = {
    isReset: PropTypes.bool.isRequired,
    isStarted: PropTypes.bool.isRequired,
    isWon: PropTypes.bool.isRequired,
  }

  const { minutes, seconds } = useTimer(isStarted, isReset, isWon)

  return (
    <div className='timer__wrapper'>
      <div className='timer'>
        Time:{' '}
        {`${minutes < 10 ? `0${minutes}` : seconds}:${
          seconds < 10 ? `0${seconds}` : seconds
        }`}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isReset: state.isReset,
  isStarted: state.isStarted,
  isWon: state.isWon,
})

export default connect(mapStateToProps)(Timer)
