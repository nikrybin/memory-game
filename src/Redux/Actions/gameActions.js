import {
  START_GAME,
  RESET_GAME,
  OPEN_CARD,
  CLOSE_CARD,
  SET_MATCH,
  ADD_MOVE,
  KILL_RESET,
} from '../types'

/**
 * Function sets game state to isStarted.
 */
export const startGame = () => (dispatch) => {
  dispatch({
    type: START_GAME,
  })
}

/**
 * Function resets game state.
 */
export const resetGame = () => (dispatch) => {
  dispatch({
    type: RESET_GAME,
  })
}

/**
 * Function sets particular card state to flipped.
 * @param {number} id Id of card.
 */
export const openCard = (id) => (dispatch) => {
  dispatch({
    type: OPEN_CARD,
    id,
  })
}

/**
 * Function sets particular card state to not flipped.
 * @param {number} id Id of card.
 */
export const closeCard = (id) => (dispatch) => {
  dispatch({
    type: CLOSE_CARD,
    id,
  })
}

/**
 * Function sets particular pair of cards state to matched.
 * @param {number} pairId Id of pair of cards.
 */
export const setMatch = (pairId) => (dispatch) => {
  dispatch({
    type: SET_MATCH,
    pairId,
  })
}

/**
 * Function increases moves by 1.
 */
export const addMove = () => (dispatch) => {
  dispatch({
    type: ADD_MOVE,
  })
}

/**
 * Function sets reset state to false.
 */
export const killReset = () => (dispatch) => {
  dispatch({
    type: KILL_RESET,
  })
}
