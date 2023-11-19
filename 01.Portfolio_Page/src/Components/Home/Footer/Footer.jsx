import React from 'react'
import {AiFillInstagram} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs" 
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillHeart} from "react-icons/ai"
import icon from '../../../Assets/Icon/Icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="image">
        <img src={icon} alt="Icon" />
      </div>

      <div className="social">
        <AiFillInstagram />
        <BsTwitter />
        <AiFillLinkedin />
      </div>

      <div className="created">
       <AiFillHeart /> 
       <p>Created by Ritansh</p>
      </div>
    </div>
  )
}

export default Footer
