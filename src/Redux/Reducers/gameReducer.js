import {
  START_GAME,
  RESET_GAME,
  OPEN_CARD,
  CLOSE_CARD,
  SET_MATCH,
  ADD_MOVE,
  KILL_RESET,
} from '../types'
import { getRandomCards } from '../../Helpers/helperFunctions'

const initialState = {
  cards: getRandomCards(),
  isReset: false,
  isStarted: false,
  isWon: false,
  moves: 0,
  openedCardsCount: 0,
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        isStarted: true,
        cards: getRandomCards(),
      }
    case RESET_GAME:
      return {
        ...state,
        moves: 0,
        cards: state.cards.map((card) => ({
          ...card,
          isOpen: false,
          isMatched: false,
        })),
        openedCardsCount: 0,
        isReset: true,
        isWon: false,
        isStarted: false,
      }
    case OPEN_CARD:
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.id
            ? {
                ...card,
                isOpen: true,
              }
            : card
        ),
        openedCardsCount: state.openedCardsCount + 1,
      }
    case CLOSE_CARD:
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.id
            ? {
                ...card,
                isOpen: false,
              }
            : card
        ),
        openedCardsCount: state.openedCardsCount - 1,
      }
    case SET_MATCH:
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.pairId === action.pairId
            ? {
                ...card,
                isMatched: true,
              }
            : card
        ),
        openedCardsCount: 0,
        isWon:
          state.cards.filter((card) => !card.isMatched).length === 2
            ? true
            : false,
      }
    case ADD_MOVE:
      return {
        ...state,
        moves: state.moves + 1,
      }
    case KILL_RESET:
      return {
        ...state,
        isReset: false,
      }
    default:
      return {
        ...state,
      }
  }
}

export default gameReducer
