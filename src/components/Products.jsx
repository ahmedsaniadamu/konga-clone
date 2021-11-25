
const LatestProducts = [     
    {
        name : 'HP Hp Envy X360 Laptop 15 Ded010' ,
        newPrice : '₦543,228',
        oldPrice : '₦595,000' ,
        discount : '₦51,772' ,
        productImage : require('../Assets/alibaba6.png').default     
    } ,
 
    {
        name : 'Samsung 50 Crystal Uhd 4k Smart' ,
        newPrice : '₦267,800',
        oldPrice : '₦290,000' ,
        discount : '₦22,200' ,
        productImage : require('../Assets/alibaba18.png').default        
    } ,
    {
        name : 'Latest Tecno poviour brand' ,
        newPrice : '₦247,800',
        oldPrice : '₦250,000' ,
        discount : '₦2,200' ,
        productImage : require('../Assets/tecno(2).png').default        
    } ,
    {
        name : 'Quality All in 1 Device Accessories' ,
        newPrice : '₦49,999',
        oldPrice : '₦53,790' ,
        discount : '₦5,791' ,
        productImage : require('../Assets/alibaba1.png').default        
    } ,
    {
        name : 'Nexus Bed Side Fridge - 65L' ,
        newPrice : '₦49,999',
        oldPrice : '₦53,790' ,
        discount : '₦3,791' ,
        productImage : require('../Assets/fridge.png').default        
    } ,
    {
        name : 'Your new Car For 2021. Ferari h360' ,
        newPrice : '₦2,314,8',
        oldPrice : '₦2,547,65' ,
        discount : '₦150,800' ,
        productImage : require('../Assets/alibaba14.png').default        
    } ,
    
]

/*product description is includued in the product image. 
there no need to write it. so only image source will be exported */

const bestProduct = [
     require('../Assets/drinks.png').default,
     require('../Assets/groceries.png').default,
     require('../Assets/inverter.png').default,
     require('../Assets/kids.png').default,
     require('../Assets/smallapp.png').default,     
     require('../Assets/drinks.png').default,
]

const specialProducts = [
    {         
        name : 'LARGE APPLIANCES.'  ,
        description : 'Get Up To 90% Off Any Item You Want This Yakata Season',
        ProductImageSrc : require('../Assets/large.png').default,
    },
    {
        name : 'Dresses For Her' ,
        description : 'Slay On a Budget. Up to 90% Off' ,
        ProductImageSrc :  require('../Assets/dresses.png').default ,         
    },
    {
        name : 'TOP DEALS ON TELEVISIONS' ,
        description : ' Get the TV You Want With Bargain Deals This Yakata' ,
        ProductImageSrc :   require('../Assets/tv.png').default,
    },
    {
        name :  'BABY NEEDS & ACCESSORIES',
        description :' Baby Essentials At Huge Discounts This Yakata' ,
        ProductImageSrc :  require('../Assets/babyacc.png').default ,
    },    
]

export { LatestProducts , bestProduct , specialProducts }

 
  
 