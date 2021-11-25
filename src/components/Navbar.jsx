import React , { useState  } from 'react'
import Signup from './Signup';
import Login from './Login'
import MobileNavbar from './MobileNavbar';

export const Navbar = () => {

    const [ navigationImages ] = useState([ 
        require('../Assets/k_travels2.png').default ,
        require('../Assets/kongafood.png').default ,
        require('../Assets/konga_pay.png').default ,
        require('../Assets/konga_health.png').default ,
        require('../Assets/new_konga_drinks.png').default ,
        require('../Assets/k_express2.png').default ,
        require('../Assets/kongaprimecopy2.0.png').default ,
     ])
    
     const [ searchInput , setSearchInput ] = useState('') ;
      
     const handleInputChange = event => setSearchInput( event.target.value ) ;

    return (
        <nav className='p-0 m-0 '>
            <img
                 src={`${require('../Assets/topimage.gif').default}`} 
                 alt="conga" 
                 className="top-image w-100 p-0 m-0 d-block" 
            />

{/*  navbar visible only in device that are > 768px ( tablet and desktop devices) */}

             <div className="desktop-navbar d-none d-md-block">
                <div className="navigations d-flex justify-content-center">
                    { 
                        navigationImages.map( (imageSrc , index) => {
                            return <img 
                                       src={imageSrc} 
                                       key={index} 
                                       className='mx-1 mx-xl-2 p-0'
                                        alt='assets' />
                        } )
                    }
                </div>
                <div 
                    className={`
                                 navbar-main d-flex                                
                                 align-items-center
                                 py-0 my-0
                               `}
                    style={{height:'50px'}}>

                     <div style={{ height:'100%' , width:'100px'}} className="d-inline-block bg-white">
                            <img
                                src={ require('../Assets/logo-alternate.png').default}
                                alt="conga assets"                                  
                                className="p-0 m-0 w-100 h-50"
                            />
                     </div>
                      <div className='navbar-link d-flex align-items-center justify-content-center h-100 ms-2'>
                         <span> Store Location </span>
                      </div>
                      <div className='navbar-link d-flex align-items-center justify-content-center h-100 ms-2'>
                         <span> Sell On Conga </span>
                      </div>

                      <div className="input-group input-group-sm py-1 ms-2">
                            <input
                                 type="search" 
                                 className="form-control py-1 ps-2" 
                                 placeholder="search for products,brand,categories..." 
                                 onChange={ handleInputChange}
                                 value={ searchInput}
                            />

                            <span className="input-group-text py-1"> 
                              <i className='fas fa-search'></i>
                            </span>
                      </div>

                      <div className="dropdown h-100">
                        
                         <div className={`
                                       navbar-link help d-flex
                                        align-items-center px-2
                                        justify-content-center
                                         h-100 ms-2' 
                                         dropdown-toggle                                         
                                     `}
                               data-bs-toggle="dropdown"
                           >

                                <span> 
                                    <i className='p-1 rounded-circle exclamation font-weight-bold' > 
                                    <i className='fas fa-question'></i>
                                    </i> &nbsp;
                                    Help &nbsp;
                                </span>
                                </div>
                                <ul class="dropdown-menu shadow-sm pb-1">
                                    <li className='ps-2 py-1'> 1.  FAQs </li>                                     
                                    <li className='ps-2 py-1'> 2.  Contact Us </li>  
                                    <li className='ps-2 py-1'> 3.  Track My Order </li>  
                                </ul>
                        </div>
                        <div className="dropdown h-100">
                        
  {/* sign up dropdown  */}
                        <div className={`
                                      navbar-link help d-flex
                                       align-items-center px-2
                                       justify-content-center
                                        h-100 ms-2' 
                                        dropdown-toggle                                         
                                    `}
                              data-bs-toggle="dropdown"
                          >
                             Signup &nbsp;
                        </div>
                            <div class="dropdown-menu shadow-sm pb-1 signup">
                                { <Signup /> }
                            </div>
                       </div>
{/* login up dropdown  */}
                       <div className="dropdown h-100">
                        
                                <div className={`
                                                navbar-link help d-flex
                                                align-items-center px-2
                                                justify-content-center
                                                    h-100 ms-2' 
                                                    dropdown-toggle                                         
                                            `}
                                    data-bs-toggle="dropdown">

                                    Login &nbsp;
                                </div>
                                <div class="dropdown-menu shadow-sm pb-1 signup">
                                    { <Login /> }
                                </div>
                       </div>
                       <div 
                           className={` 
                                     navbar-link d-flex align-items-center
                                      justify-content-center h-75 ms-2 bg-success
                                      `} >
                                            <span 
                                                   className="fas fa-cart-arrow-down mx-3"
                                                    style={{ fontSize : '0.6rem'}}
                                                 > 
                                                    <sup> 0 </sup>
                                            </span>
                         </div>
                    </div>
                    <div className= {`
                                       navigations-container m-0 p-0 w-100 mx-auto
                                        d-flex justify-content-center
                                         align-items-center
                                    `}
                         style={{ height:36 }}>
                                  <NavigationItems
                                               text = 'Other Categories' 
                                               icon = { <span className='fas fa-bars'></span> } 
                                   />
                                  <NavigationItems text = 'Computers and Accessories' />
                                  <NavigationItems text = 'Phones and Tablet' />
                                  <NavigationItems text = 'Electronics' />
                                  <NavigationItems text = 'Konga Fashion' />
                                  <NavigationItems text = ' Home and Kitchen' />
                                  <NavigationItems text = 'Baby Kids and Toys' />                                   
                                  <NavigationItems text = 'Apply On Deals' />
                    </div>
             </div>             
{/* destop navbar end */}             

{/* mobile navbar visible only in mobile devices */}
             <div className="mobile-navbar d-md-none mt-1">
                   <MobileNavbar />   
             </div>
        </nav>
    )
}

 

 const NavigationItems = ({text,icon}) => {
     return (
         <div className="navigation-item h-100 p-0 m-0 mx-2 d-flex align-items-center">
                 <div className="h-auto p-0 m-0 px-xl-2">
                    { text } {icon}
                 </div>
         </div>
     )
 }