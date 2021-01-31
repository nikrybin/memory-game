import { useEffect, useState } from 'react'

/**
 * This hook provides timer logic for the game.
 * It starts timer when game is started and stops timer when game is reset or player wins.
 *
 * @param {boolean} isStarted If game is started or not.
 * @param {boolean} isReset If game is reset or not.
 * @param {boolean} isWon If player is won or not.
 * @return {object} An object with minutes and seconds.
 */
const useTimer = (isStarted, isReset, isWon) => {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    let timer

    if (isStarted) {
      timer = setTimeout(() => {
        if (seconds === 59) {
          setMinutes((prevVal) => prevVal + 1)
          setSeconds(0)
        } else {
          setSeconds((prevVal) => prevVal + 1)
        }
      }, 1000)
    }

    if (isReset) {
      setSeconds(0)
      setMinutes(0)
      clearTimeout(timer)
    }

    if (isWon) {
      clearTimeout(timer)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [isStarted, isReset, seconds, isWon])

  return { minutes, seconds }
}

export default useTimer
