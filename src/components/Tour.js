import React from 'react'
import EachTour from './EachTour'

function Tour({tours, removeTour}) {
  return (
      <div>
            {
                tours.map((tour)=>{
                    const {id,name,info,image,price} = tour
                    return(
                        <section key={id} className='section'>
                            <EachTour 
                            name = {name}
                            info = {info}
                            image = {image}
                            price = {price}
                            removeTour = {removeTour}
                            id = {id}
                        />
                             <div className='remove-btn-container'>
                                <button className='remove-btn' onClick={()=>removeTour(id)}>
                                        Not Intrested 
                                </button>
                             </div>
                        </section>
                        
                    )
                })

            }
        </div>
        
  )
}

export default Tour