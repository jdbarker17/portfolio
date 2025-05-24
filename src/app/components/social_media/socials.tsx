import React from 'react'
import InstaIcon from './instagram'
import YoutubeIcon from './youtube'
import Linkedin from './linkedin'

const Socials = () => {
  return (
    <ul className="social-media-buttons flex gap-4 justify-items-start items-center mt-2"> 
        <InstaIcon />
        <YoutubeIcon/>
        <Linkedin/>
    </ul>
  )
}

export default Socials