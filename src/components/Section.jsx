import React from 'react'
import OurPartners from './OurPartners'
import { LatestProducts , bestProduct , specialProducts} from './Products'

const Section = () => {
    
    return (
        <section className='mt-2'>
           <div className="d-flex justify-content-between justify-content-md-start header py-2 border-bottom">
               <h5 className='m-0 p-0 ms-2 fw-bold'> Recommended For You </h5>
               <span className='ms-md-5 m-0 p-0 align-self-center me-2 me-md-auto'>  See All Items </span>
           </div>

           {/* display item as  grid in  devices  with large screens*/}
            <div className='desktop-product-container row mb-2  mt-2 w-100 p-0 mx-auto  justify-content-center'>
                    <ProductItems  className="col-4 mt-3 " />
            </div>

            {/* display items in  slide view in  devices  with small screens ( mobile devices )*/}
            <div className='mobile-product-container mt-3 mb-2 d-sm-none'>
                <ProductItems className='ms-2' />
            </div>

            <div className='container-fluid mt-3 mobile-accessories'>
                <img
                      src={ require('../Assets/webaccess.jpg').default }
                      alt="konga assets" 
                      className='w-100 p-0 m-0'
                />
            </div> 

            <div className="amazing-product row mx-auto  mt-3">
                    <img
                            src={ require('../Assets/under5k.jpg').default }
                            alt="konga assets" 
                            className='col-6 pe-1'
                    />
                    <img
                            src={ require('../Assets/under20k.jpg').default }
                            alt="konga assets" 
                            className='col-6 ps-1'
                    />
            </div>
            
            <div className="container-fluid p-0 m-0 p-sm-2 best-selling-product mt-3 mt-md-1">
                  <h5 className="header py-2 py-md-1 ps-2">
                       Best Selling Products
                  </h5>
                  <div className="products mt-2 ">

                        {  bestProduct.map( (item,index) => {
                               return (
                                   <img 
                                        src = { item }
                                        key = { index }
                                         alt="konga assets"
                                         className='d-inline-block me-3 me-md-4'
                                    />
                               )
                        }) }

                  </div>
                  <div className="special-products pt-5 pt-md-4">
                        
                         {  specialProducts.map( (product, index) => {
                              return (
                                  <div className='d-inline-block ms-1 me-2 mt-0 pt-0 item border'
                                        key = { index }>
                                       <img 
                                              src = { product.ProductImageSrc} 
                                              alt="konga assets" 
                                              className='p-0 m-0 w-100'
                                         />
                                         <h5 className='p-0 m-0 mt-2 mt-md-1 px-1'> 
                                            {  product.name }
                                          </h5>
                                         <p className="description p-0 m-0 mt-2 word-wrap px-1">
                                             { product.description }
                                         </p>
                                         <button className=' m-0  px-1'> 
                                             Shop Now <i className="fas fa-chevron-right ms-2 "></i>
                                          </button>
                                  </div> 
                              )
                         } ) }

                  </div>
                  {/* a component that contains brand partners images */}
                  <OurPartners />
                  <div className="about-us m-0 p-0  pt-3 pt-md-2 ">
                      <h5 className='p-0 m-0 pt-2'>
                              Online Shopping on Konga.com – Nigeria’s Largest Online Mall 
                      </h5>
                      <p className=' px-1 px-md-0 p-0 m-0 pt-2'>
                            Konga.com is Nigeria’s number one online Shopping destination.
                            We pride ourselves in having everything you could possibly need 
                            for life and living at the best prices than anywhere else.
                             Our access to Original Equipment Manufacturers and premium 
                             sellers gives us a wide range of products at very low prices.
                             Some of our popular categories include electronics, mobile phones, 
                             computers, fashion, beauty products, home and kitchen, Building
                              and construction materials and a whole lot more from premium brands. 
                              Some of our other categories include Food and drinks, automotive and 
                              industrial, books, musical equipment, babies and kids items, sports
                               and fitness, to mention a few. To make your shopping experience swift 
                               and memorable, there are also added services like gift vouchers,
                                consumer promotion activities across different categories
                                 and bulk purchases with hassle-free delivery. Enjoy free shipping rates 
                                 for certain products and with the bulk purchase option, you can enjoy low 
                                 shipping rates, discounted prices and flexible payment. When you shop on our
                                  platform, you can pay with your debit card or via KongaPay, which is a 
                                  convenient and secured payment solution. Get the best of lifestyle services 
                                  online. Don't miss out on the biggest sales online which takes place on 
                                  special dates yearly.
                      </p>
                  </div>
            </div>
            
        </section>
    )
}

const ProductItems = ({ className }) => {
     return (
              <>
                  { 
                    LatestProducts.map( 
                        (item,index) => < SingleItem
                                                key={index}
                                                item =  { {...item} }
                                                className = { className }
                                            />
                            )
                  }
              </>
            )
}

const SingleItem = ({ item , className}) => {     
    
    return(
        <div className={ className }>
             <div className="d-flex">
                 <img src={item.productImage}
                      alt="konga assets" 
                      className='p-0 m-0'
                 />
                 <div className="product-info ms-sm-2">
                      <h5 className='m-0 p-0'> { item.name } </h5>
                       <p className='m-0 p-0 pr-2 mr-2'>
                            <strong className='m-0 p-0' > {item.newPrice }</strong>
                            <del className='ms-1 p-0 m-0 mr-2'> {item.oldPrice} </del>                            
                      </p>
                      <span className="d-block"> you saved { item.discount } </span>
                 </div>
             </div>
        </div>
    )

}

export default Section
