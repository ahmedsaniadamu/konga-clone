import React from 'react'
import Carousel from './Carousel'

const Header = () => {

    const [ smallImages ] = React.useState([
        require('../Assets/calender.gif').default,
        require('../Assets/gif.gif').default,
        require('../Assets/primee.gif').default,  
        require('../Assets/food.jpg').default,       
    ])

    const [ NavigationImages ] = React.useState([
        require('../Assets/brandstores20.png').default,
        require('../Assets/k_express2.png').default,
        require('../Assets/k_travels2.png').default,  
        require('../Assets/kongablogcopy2.0.png').default,        
        require('../Assets/new_konga_drinks.png').default,
        require('../Assets/new_konga_groceries.png').default,  
        require('../Assets/travel2.0.png').default,
    ])

    return (
        <header className='mt-1 header'>
              <div className="row w-100 p-0 m-0 mx-auto banner">
                   <div className="col-12 col-sm-6 col-md-8 h-100 pe-0 ps-1 m-0">
                       <Carousel />
                   </div>
                   <div className="col-12 col-sm-6 col-md-4 small-images row p-0 m-0">
                         <div className="col-6 m-0 p-0">
                            <img 
                                src={ smallImages[0]} 
                                alt="konga assets"
                                className='rounded'
                             />
                         </div>
                         <div className="col-6 m-0 p-0">
                            <img 
                                src={ smallImages[1]} 
                                alt="konga assets"
                                className='rounded'
                             />
                         </div>
                         <div className="col-6 m-0 p-0">
                            <img 
                                src={ smallImages[2]} 
                                alt="konga assets"
                                className='rounded'
                             />
                         </div>
                         <div className="col-6 m-0 p-0">
                            <img 
                                src={ smallImages[3]} 
                                alt="konga assets"
                                className='rounded'
                             />
                         </div>
                         
                   </div>
              </div>
             <div className="navigations d-none d-md-flex justify-content-center mt-1 mt-xl-2">
                 {  NavigationImages.map( 
                        (image , index ) => <SingleNavImage key = { index } src = { image } />
                 )  }
            </div>     
        </header>
    )
}

const SingleNavImage = ({src}) => {
       return (
           <img src= { src } alt="konga assets" className='nav-images mx-1 border px-1 mb-1 mb-xl-2' />
       )
}

export default Header
