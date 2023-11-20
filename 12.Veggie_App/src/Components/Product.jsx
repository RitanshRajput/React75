import React from 'react'

const Product = ({Image, Name, Price, Color}) => {
  return (
    <div className='col-12 col-md-4 '>
        <div className='p-1'>
            <div className={`border border-success shadow-sm p-3 ${Color}`}>
            <img src={Image} alt="" className='w-75 h-75'/>
            <h3 className='text-light'>{Name}</h3>
            <p className='text-light'>{Price}</p>
            <button className='btn border border-success w-100 rounded-0 text-light'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product