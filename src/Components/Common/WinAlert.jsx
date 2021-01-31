import React from 'react'
import '../../Assets/Styles/WinAlert.scss'
import { ReactComponent as WinAlertImage } from '../../Assets/Images/win-alert.svg'

const WinAlert = () => {
  return (
    <div className='win-alert__wrapper'>
      <div className='win-alert'>
        <WinAlertImage />
      </div>
    </div>
  )
}

export default WinAlert
