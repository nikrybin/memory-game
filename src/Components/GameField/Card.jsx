import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { openCard } from '../../Redux/Actions/gameActions'
import useImage from '../../Hooks/useImage'
import '../../Assets/Styles/Card.scss'

const Card = ({ card, openCard, isStarted, openedCardsCount }) => {
  Card.propTypes = {
    card: PropTypes.object.isRequired,
    isStarted: PropTypes.bool.isRequired,
    openCard: PropTypes.func.isRequired,
    openedCardsCount: PropTypes.number.isRequired,
  }

  const { id, isOpen, isMatched, pairId } = card

  const image = useImage(pairId)

  const cardsActionsAvailable = () => isStarted && openedCardsCount !== 2

  const handleOpen = () => cardsActionsAvailable() && !isOpen && openCard(id)

  const BackSide = () => {
    return (
      <div
        className={`card__back ${
          cardsActionsAvailable() ? 'card__back_hoverable' : ''
        }`}
        onClick={handleOpen}
      />
    )
  }

  const FrontSide = () => {
    return (
      <div className='card__front'>
        <img src={image} alt='' />
      </div>
    )
  }

  return (
    <div className='card__wrapper'>
      <div
        className={`card__flip-zone ${
          isOpen ? 'card__flip-zone_flipped' : ''
        } ${isMatched ? 'card__flip-zone_hidden' : ''}`}
      >
        <FrontSide />
        <BackSide />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isStarted: state.isStarted,
  openedCardsCount: state.openedCardsCount,
})

const mapDispatchToProps = {
  openCard,
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
