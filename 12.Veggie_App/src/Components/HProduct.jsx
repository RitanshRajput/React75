import React from 'react'

const HProduct = ({Image, Image2, Title, Description}) => {
  return (
    <div className="col">
          <div className="card shadow-sm">
                <img src={Image} alt="" />
            <div className="card-body d-flex">
                <img src={Image2} alt="" className='w-25 h-25'/>
                <span>
                    <strong>{Title}</strong>
                    <p className='textColor'>{Description}</p>
                </span>
            </div>
          </div>
        </div>
  )
}

export default HProduct