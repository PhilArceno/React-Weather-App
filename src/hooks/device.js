import {useState, useEffect} from 'react'
import mobile from '../../uploads/mobile.svg'
import desktop from '../../uploads/desktop.svg'


export default function checkDevice() {
    const widthOutput = document.getElementsByTagName('html')
    const [device, setDevice] = useState({window: null})

    const reportWindowSize = () => {
        widthOutput.textContent = window.innerWidth;
        if (widthOutput.textContent >= 1080) {
            setDevice({window: desktop})
        }
        if (widthOutput.textContent < 1080) {
            setDevice({window: mobile})
        }
      }

    return {device, reportWindowSize};
  }
  