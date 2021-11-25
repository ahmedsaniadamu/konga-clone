import React,{ useState } from 'react'

const Carousel = () => {
       
   //carousel images
    const [ images ] =  useState([
       require('../Assets/advert5.png').default ,
       require('../Assets/comp.jpg').default ,
       require('../Assets/detergent.jpg').default ,
       require('../Assets/phones.jpg').default ,
       require('../Assets/kk.jpg').default ,
       require('../Assets/verveanticipate.png').default ,
    ])

    return (
         <>            
               {/* Carousel */}
               <div id="demo" className="carousel slide " data-bs-ride="carousel">
                    {/*  <!-- Indicators/dots --> */}
                    <div className="carousel-indicators">

                         <CarouselIndicator index="0" active={ true } />
                         <CarouselIndicator index="1" />
                         <CarouselIndicator index="2" />
                         <CarouselIndicator index="3" />
                         <CarouselIndicator index="4" />
                         <CarouselIndicator index="5" />

                   </div>

                  {/*  <!-- The slideshow/carousel -->  */}
                    <div className="carousel-inner">
                         <CarouselImage src = { images[0] } active = { true} />
                         <CarouselImage src = { images[1] } />
                         <CarouselImage src = { images[2] } />
                         <CarouselImage src = { images[3] } />
                         <CarouselImage src = { images[4] } />
                         <CarouselImage src = { images[5] } />
                   </div>

{/* <!-- Left and right controls/icons --> */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                               <span className="fas fa-chevron-left p-2 shadow"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                         <span className="fas fa-chevron-right p-2 shadow"></span>
                    </button>
              </div>
         </>
    )
}

const CarouselIndicator = ({ index , active }) => {
    return(
        <span              
              data-bs-target="#demo"
              data-bs-slide-to= { index }
              style={{ height:8 , width:8}}
              className={ active && "active"}>                            
        </span>
    )
}

const CarouselImage = ({src , active }) => {
    return(
        <div className={ active ? "carousel-item active" : "carousel-item "  }>
             <img src={ src } alt="konga asset" className="d-block w-100 h-100 p-0 m-0 rounded" />
        </div>
    )
}
export default Carousel
