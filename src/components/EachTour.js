import React from 'react'
import {useState} from 'react'

function EachTour({name,info,image,price,removeTour,id}) {
    const [readmore, setReadmore] = useState(true)
    const readLess = () =>{
        setReadmore(!readmore)
    }
  return (
    <article className='each-tour'>
        <div className='img-container'>
            <img className= "img" src={image} alt="tour-pic" />
        </div>
        <div className='name-price'>
            <p className='name'>{name}</p>
            <p className='price'>${price}</p>
        </div>
        <div className='info'>
            {(readmore)?info:`${info.substring(0, 200)}...`}
            <button className='btn' onClick={readLess}>{
                (readmore)?<span>showless</span>:<span>readmore</span>
            }</button>
        </div>
      
    </article>
  )
}

export default EachTour