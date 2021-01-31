/**
 * Function return an array of randomly plased cards.
 *
 * @return {array} An array of randomly placed cards as objects
 */
export const getRandomCards = () =>
  Array(36)
    .fill()
    .map((item, index) => ({
      id: Math.random(),
      pairId: index % 2 ? (index + 1) / 2 - 1 : index / 2,
      isOpen: false,
      isMatched: false,
    }))
    .map((card) => ({ randomId: Math.random(), payload: card }))
    .sort((a, b) => a.randomId - b.randomId)
    .map((object) => object.payload)
