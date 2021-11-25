import React from 'react'

const OurPartners = () => {
    
    const [ brandImages ] = React.useState([
      
        require('../Assets/apclogo.png_r1FWaERZY.png').default ,
        require('../Assets/apple.png').default,
        require('../Assets/asuslo.png').default,
        require('../Assets/brands.png').default,
        require('../Assets/coke.png').default,
        require('../Assets/hp.png').default,
        require('../Assets/intel.png').default,
        require('../Assets/samsung.png').default,
        require('../Assets/tecno.png').default,
        require('../Assets/paypal.png').default,
        require('../Assets/uni.png').default,         
        require('../Assets/nike.png').default,
        
    ])

    return (
        <div className='mt-3 row w-100 p-0 m-0  our-partners'>
              {
                 brandImages.map((imageSrc , index ) => {
                     return <Images src={ imageSrc } key = { index } />
                 })
              }
        </div>
    )
}


const Images = ({ src }) => {

    return(
        <img
              src={ src }
               alt='konga images' 
               className = 'p-0 m-0 border-start border-bottom  col-4 col-sm-3 col-md-2'
        />
    )

}
export default OurPartners 
