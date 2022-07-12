import React from 'react'
import MySound from './MySound'
import brown from '../../images/sounds/brown-noise.mp3'
import cafe from '../../images/sounds/cafe-bg.mp3'
import rain from '../../images/sounds/rain-bg.mp3'

 const AllSounds = () => {
   return (
     <div className='all-sounds'>
        <MySound audio={brown} name={'Brown Noise'}/>
        <MySound audio={cafe} name={'Cafe BG'}/>
        <MySound audio={rain} name={'Rain BG'}/>
     </div>
   )
 }
 
 export default AllSounds