import React from 'react'
import Moves from './Moves'
import Timer from './Timer'
import '../../Assets/Styles/GameInfoContainer.scss'

const GameInfoContainer = () => {
  return (
    <div className='game-info-container__wrapper'>
      <div className='game-info-container__item'>
        <Moves />
      </div>
      <div className='game-info-container__item'>
        <Timer />
      </div>
    </div>
  )
}

export default GameInfoContainer
