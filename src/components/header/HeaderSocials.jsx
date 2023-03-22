import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {ImGithub} from 'react-icons/im'
import {AiFillMediumCircle} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/alidaley' target='_blank'><ImLinkedin/></a>
        <a href='http://github.com/Daleyar' target='_blank'><ImGithub/></a>
        <a href='https://medium.com/@ali.daley' target='_blank'><AiFillMediumCircle/></a>
    </div>
  )
}

export default HeaderSocials