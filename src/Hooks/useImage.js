import atomSymbol from '../Assets/Images/twemoji_atom-symbol.svg'
import banana from '../Assets/Images/twemoji_banana.svg'
import basketball from '../Assets/Images/twemoji_basketball.svg'
import bat from '../Assets/Images/twemoji_bat.svg'
import beerMug from '../Assets/Images/twemoji_beer-mug.svg'
import bentoBox from '../Assets/Images/twemoji_bento-box.svg'
import beverageBox from '../Assets/Images/twemoji_beverage-box.svg'
import blackCat from '../Assets/Images/twemoji_black-cat.svg'
import blossom from '../Assets/Images/twemoji_blossom.svg'
import blueberries from '../Assets/Images/twemoji_blueberries.svg'
import boar from '../Assets/Images/twemoji_boar.svg'
import bomb from '../Assets/Images/twemoji_bomb.svg'
import bouquet from '../Assets/Images/twemoji_bouquet.svg'
import camera from '../Assets/Images/twemoji_camera.svg'
import candy from '../Assets/Images/twemoji_candy.svg'
import cheeseWedge from '../Assets/Images/twemoji_cheese-wedge.svg'
import circusTent from '../Assets/Images/twemoji_circus-tent.svg'
import cupcake from '../Assets/Images/twemoji_cupcake.svg'

/**
 * Hook returns an image based on the pairId of the card.
 * @param {number} pairId Id of pair of cards.
 * @returns Image to add to img src.
 */
const useImage = (pairId) => {
  switch (pairId) {
    case 0:
      return atomSymbol
    case 1:
      return banana
    case 2:
      return basketball
    case 3:
      return bat
    case 4:
      return beerMug
    case 5:
      return bentoBox
    case 6:
      return beverageBox
    case 7:
      return blackCat
    case 8:
      return blossom
    case 9:
      return blueberries
    case 10:
      return boar
    case 11:
      return bomb
    case 12:
      return bouquet
    case 13:
      return camera
    case 14:
      return candy
    case 15:
      return cheeseWedge
    case 16:
      return circusTent
    case 17:
      return cupcake
    default:
      return
  }
}

export default useImage
