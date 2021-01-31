import React from 'react'
import Header from './Header'
import GameInfo from '../GameInfo/GameInfoContainer'
import Board from '../GameField/Board'
import StartButton from './StartButton'
import '../../Assets/Styles/Container.scss'

const Container = () => {
  return (
    <div className='container'>
      <div className='container__wrapper'>
        <div className='container__item'>
          <Header />
        </div>
        <div className='container__item'>
          <GameInfo />
        </div>
        <div className='container__item'>
          <Board />
        </div>
        <div className='container__item'>
          <StartButton />
        </div>
      </div>
    </div>
  )
}

export default Container
