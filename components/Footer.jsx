import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineFacebook, AiOutlineGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>&copy;2022 Shop my Stuffs All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiOutlineFacebook />
        <AiOutlineGithub />
      </p>
    </div>
  )
}

export default Footer