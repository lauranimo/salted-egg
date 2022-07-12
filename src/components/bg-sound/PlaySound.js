import React, { useState } from 'react'
import useSound from 'use-sound'
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

const PlaySound = ( { audio, name, volume }) => {
    const [playing, setPlaying] = useState(false);

    // play: function to call to trigger sound
    // stop: exposed data- function to stop sound (pause hogs too much resources)
    // audio: url || volume: HookOption- value passed down from volume slider
    const [play, { stop }] = useSound(audio, { volume })

  return (
    <div className='play-sound' 
    onClick={() => {
        playing ? stop() : play();
        setPlaying(!playing);
    }}>
        {playing ? <FaPauseCircle style={{fontSize:'20px'}}/> 
            : <FaPlayCircle  style={{fontSize:'20px'}}/> }
        <h3 style={{fontSize:'1.2em'}}>{name}</h3>
    </div>
  )
}

export default PlaySound