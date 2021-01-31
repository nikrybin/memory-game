import { useEffect } from 'react'
import {
  closeCard,
  setMatch,
  addMove,
  killReset,
} from '../Redux/Actions/gameActions'
import { useDispatch } from 'react-redux'

/**
 * This hook provides timers for game logic.
 * When player opens one card it starts timer for 5 seconds.
 * When player opens two cards it starts timer for 1,5 seconds and comapre open cards.
 * If cards are the same it sets cards state to matched, else it sets cards state to closed.
 * After each timer player moves are being increased by 1.
 *
 * @param {array} cards Array of all cards.
 * @param {number} openedCardsCount Amount of open cards.
 * @param {bool} isReset If game is reset or not.
 */
const useMovesLogicTimers = (cards, openedCardsCount, isReset) => {
  const dispatch = useDispatch()

  useEffect(() => {
    let oneCardTimer, twoCardsTimer
    const openCards = cards.filter((card) => card.isOpen && !card.isMatched)

    if (openedCardsCount === 1) {
      oneCardTimer = setTimeout(() => {
        closeCard(openCards[0].id)(dispatch)
        addMove()(dispatch)
      }, 5000)
    }

    if (openedCardsCount === 2) {
      clearTimeout(oneCardTimer)
      if (openCards[0].pairId === openCards[1].pairId) {
        twoCardsTimer = setTimeout(() => {
          addMove()(dispatch)
          setMatch(openCards[0].pairId)(dispatch)
        }, 1500)
      } else {
        twoCardsTimer = setTimeout(() => {
          closeCard(openCards[0].id)(dispatch)
          closeCard(openCards[1].id)(dispatch)
          addMove()(dispatch)
        }, 1500)
      }
    }

    if (isReset) {
      clearTimeout(oneCardTimer)
      clearTimeout(twoCardsTimer)
      killReset()(dispatch)
    }

    return () => {
      clearTimeout(oneCardTimer)
      clearTimeout(twoCardsTimer)
    }
  }, [cards, openedCardsCount, isReset, dispatch])
}

export default useMovesLogicTimers
