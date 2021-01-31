import React from 'react'
import Card from './Card'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import useMovesLogicTimers from '../../Hooks/useMovesLogicTimers'
import WinAlert from '../Common/WinAlert'
import '../../Assets/Styles/Board.scss'

const Board = ({ cards, openedCardsCount, isReset, isWon }) => {
  Board.propTypes = {
    cards: PropTypes.array.isRequired,
    isReset: PropTypes.bool.isRequired,
    isWon: PropTypes.bool.isRequired,
    openedCardsCount: PropTypes.number.isRequired,
  }

  useMovesLogicTimers(cards, openedCardsCount, isReset)

  return (
    <div className='board'>
      <div className='board__wrapper'>
        {cards.map((card) => (
          <div key={card.id} className='board__item'>
            <Card card={card} />
          </div>
        ))}
      </div>
      {isWon && <WinAlert />}
    </div>
  )
}

const mapStateToProps = (state) => ({
  cards: state.cards,
  isReset: state.isReset,
  isWon: state.isWon,
  openedCardsCount: state.openedCardsCount,
})

export default connect(mapStateToProps)(Board)
