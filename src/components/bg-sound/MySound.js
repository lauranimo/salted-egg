import React, { useState} from 'react'
import PlaySound from './PlaySound'
import { FaVolumeUp, FaVolumeDown } from 'react-icons/fa'

const MySound = ( { audio, name }) => {
    const [volume, setVolume] = useState(1);

  return (
    <div className='my-sound'>
        <PlaySound audio = {audio} name = {name} volume={volume}></PlaySound>
        <div className='volume-control'>
            <FaVolumeDown style={{fontSize:'20px'}}></FaVolumeDown>
            <input className='volume-slider' type="range"
                style={{color: '#750C00'}}
               min={0}
               max={1}
               step={0.02}
               value={volume}
               onChange={(e) => {
                setVolume(e.target.valueAsNumber)}}/>
            <FaVolumeUp style={{fontSize:'20px'}}></FaVolumeUp>
        </div>
    </div>
  )
}

export default MySound