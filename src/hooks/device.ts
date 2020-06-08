import {useState, useEffect} from 'react'
import mobile from '../../uploads/mobile.svg'
import desktop from '../../uploads/desktop.svg'

interface retVal {
  device: {
    window: string
  },
  reportWindowSize: () => void
}

export default function checkDevice(): retVal {
    const [device, setDevice] = useState({window: null})

    const reportWindowSize = ():void => {
        let thisWindow = window.innerWidth;
        if (thisWindow >= 1080) {
            setDevice({window: desktop})
        }
        if (thisWindow < 1080) {
            setDevice({window: mobile})
        }
      }

    return {device, reportWindowSize};
  }
  