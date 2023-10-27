import React from 'react'
import Image from  "../../../Assets/homePageImg/guyPosing.png";

const Header = () => {
  return (
    <div className='header'>

        <div className="image">
            <img src={Image} alt="Image" />
        </div>
        
          <div className="details">
              <h3>Hello Im Ritansh</h3>
              <h1>React JS Developer</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Expedita at, vitae explicabo dolor necessitus dolore,
                labore ipsam iste earum cum omnis recusandae fugiat quo libero?
              </p>
              <button>About Me</button>
          </div>
    </div>
  )
}

export default Header
