import React ,{ useState } from 'react'
import Signup from './Signup'
import Login from './Login' ;
 

/* this component (mobile navbar ) is visible only 
  in small devices ( mobile devices ) as a scrolled sidebar  */

const MobileNavbar = () => {
    
    const [ searchInput , setSearchInput ] = useState(null)
    const handleInputChange = event => setSearchInput(event.target.value)

    return (
        <>
            { /* boostrap 5 Offcanvas Sidebar */}
             
            { /* header  */ }  <Header />
             
             <div className='menu-container'>
                 <input 
                         type="search"
                          name="search" 
                          placeholder="Search for products , brands and categories "
                          value={searchInput}
                          onChange={ handleInputChange }
                          className="form-control d-block mx-auto py-2 border-0"
                           style={{  width:'96%' }}
                          />

                  <div className="d-flex justify-content-between mt-2 items-container border-top pt-2">
                      <div className='text-center'>
                          <span className='fas fa-globe-europe'></span>
                          <p className='mx-1'> Browse All</p>
                      </div>
                      <div className='text-center'>
                          <span className='fas fa-tshirt'></span>
                          <p className='mx-1'> Fashion </p>
                      </div>
                      <div className='text-center'>
                          <span className='fas fa-mobile'></span>
                          <p className='mx-1'>Phones</p>
                      </div>
                      <div className='text-center'>
                          <span className='fas fa-desktop'></span>
                          <p className='mx-1'> Computers</p>
                      </div>
                      <div className='text-center'>
                          <span className='fas fa-rocket'></span>
                          <p className='mx-1'> All  Deals</p>
                      </div>                      
                  </div>
             </div>

            <div className="offcanvas offcanvas-start p-0 m-0" id="sidebar">
                <div className="offcanvas-header w-100 m-0 p-0">
                    <Header icon='close' />
                </div>
                <div className="offcanvas-body p-0 m-0">
                     { /* fixed  signup and login form  */ }
                       <FormContainer/>
                       <div className='w-100 p-0 m-0 mx-auto button-groups row mt-2 border-top ' >
                           
                            <div className="col-6 p-0 m-0 d-flex border ">
                                  <span className="fas fa-cart-arrow-down align-self-center h-auto ms-3 icon">
                                  </span>
                                  <div className='ms-2 py-2'>
                                      <h5 className='p-0 m-0'> My Cart</h5>
                                      <p className='p-0 m-0'> 0 items in cart</p>
                                  </div>
                            </div>

                            <div className="col-6 p-0 m-0 d-flex border ">
                                  <span className="fas fa-edit align-self-center h-auto ms-3 icon">
                                  </span>
                                  <div className='ms-2 py-2'>
                                      <h5 className='p-0 m-0'> Sell on Konga</h5>
                                      <p className='p-0 m-0'> joint the other merchant</p>
                                  </div>
                            </div>
                            
                            <div className="col-6 p-0 m-0 d-flex border ">
                                  <span className="fas fa-map-marker-alt align-self-center h-auto ms-3 icon">
                                  </span>
                                  <div className='ms-2 py-2'>
                                      <h5 className='p-0 m-0'> Track Order</h5>
                                      <p className='p-0 m-0'> view order status</p>
                                  </div>
                            </div>

                            <div className="col-6 p-0 m-0 d-flex border ">
                                  <span className="fab fa-chromecast align-self-center h-auto ms-3 icon">
                                  </span>
                                  <div className='ms-2 py-2'>
                                      <h5 className='p-0 m-0'> Physical stores</h5>
                                      <p className='p-0 m-0'> stores around you</p>
                                  </div>
                            </div>
                            
                       </div>
                        <div className='categories-container mt-0 '>
                             <h1 className='d-inline-block w-100 mt-2 ps-1 mb-0 py-2'> Categories </h1>
                             <ul className='list-group m-0 p-0 border-0 pt-1'>
                                  <CategoriesItem text = 'Computers and Accessories' />
                                  <CategoriesItem text = 'Phones and Tablet' />
                                  <CategoriesItem text = 'Electronics' />
                                  <CategoriesItem text = 'Konga Fashion' />
                                  <CategoriesItem text = ' Home and Kitchen' />
                                  <CategoriesItem text = 'Baby Kids and Toys' />
                                  <CategoriesItem text = 'Other Categories' />
                                  <CategoriesItem text = 'Apply On Deals' />
                                  <CategoriesItem text = 'Intel Affordabilty Campaign' />                                   
                             </ul>
                             <p className='mt-2 py-2'>
                                  <i className="fas fa-phone mx-2"></i>
                                     Contact Us
                             </p>
                        </div>
                </div>
            </div>                      
        </>
    )
}

const CategoriesItem = ({text}) => {
   return(
            <li className='list-group-item py-2 d-flex justify-content-between'> 
                <span> { text } </span> 
                <i className="fas fa-chevron-right"></i>
            </li>
   )
}

const Header = ({ icon }) => {
    return (
        <div 
             style={{ height:40 }}
              className="row p-0 m-0 justify-content-center align-items-center w-100 mx-auto">
            <div className="col-6 p-0 m-0">

{ /* Button to open the offcanvas sidebar */}
                 {
                     icon === 'close' ?  
                                        <span 
                                            data-bs-dismiss="offcanvas"
                                            className='fas fa-times ms-1'>
                                        </span> 
                                     :
                                        <span 
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#sidebar"
                                            className='fas fa-bars ms-1'>
                                        </span> 
                 }  
                <img
                        src={ require('../Assets/logo-alternate.png').default}
                        alt="conga assets"                                  
                        className="p-0 m-0 ms-2"
                        style={{ width: 90 , height : 20}}

                />
               </div>
                <div className="col-6 p-0 m-0 d-flex justify-content-end">
                    <span className="fab fa-chromecast me-2"></span>
                    <span className="fas fa-cart-arrow-down me-2"></span>
                </div>
       </div>          
    )
}

const FormContainer = () => {
    
    const [ showLogin , setShowLogin ] = useState(false) ;
    const [ showSignup , setShowSignup ] = useState(false) ;
     
    const showLoginFunc = () => setShowLogin(true) ;
    const hideLoginForm = () => setShowLogin(false)

    const showSignupFunc = () => setShowSignup(true) ;
    const hideSignupForm = () => setShowSignup(false)

        let LoginFormStyle  = {
                           position:'fixed' ,
                            zIndex :'99' , 
                            height:'100vh' , 
                            width:'100vw' ,
                            display : showLogin ? 'block' : 'none' ,
                            backgroundImage : `url(${require('../Assets/advert5.png').default})` ,
                            top:0 , left : 0
                         }

        let signupFormStyle = { 
                                ...LoginFormStyle ,
                                 display : showSignup ? 'block' : 'none' ,
                              }

    return (
           <div className='form-container'>
                <div className="login-and-signup d-flex justify-content-center">
                        <button className = 'btn btn-outline-success show-login-btn'
                                onClick={ showLoginFunc }> 
                            Login
                        </button>                        
                        <button className = 'btn btn-outline-success show-signup-btn ms-3'
                                onClick={ showSignupFunc }> 
                            Signup
                        </button> 
                 </div>

{ /* the pop up modal for login */ }                 
                 <div style = { LoginFormStyle } className="fixed-login-form">
                         <div style={{ width:'90%'}} className='d-block mx-auto'>
                                <h1 className='mt-2 text-end text-secondary header'> 
                                    <span className='fas fa-times' onClick = { hideLoginForm }>
                                    </span> 
                                </h1>
                                <div className='mt-2'>
                                    { showLogin &&  <Login />  }
                                </div>
                         </div>
                 </div>

{/* the pop up modal for sign up */} 
                <div style = { signupFormStyle } className="fixed-login-form">
                         <div style={{ width:'90%'}} className='d-block mx-auto'>
                                <h1 className='mt-2 text-end text-secondary header'> 
                                    <span className='fas fa-times' onClick = { hideSignupForm }>
                                    </span> 
                                </h1>
                                <div className='mt-5'>
                                     { showSignup &&  <Signup />  }
                                </div>
                         </div>
                 </div>                                   
           </div>
    )
}
export default MobileNavbar

 