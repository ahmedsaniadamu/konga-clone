import React from 'react' ;

const ContactInfo = ({ text , icon , header }) => {
    
    return(
             <div className="p-0 m-0 d-flex ms-1">

                   { icon &&   <span className={`${icon} align-self-center h-auto icon`}> </span> }
                   
                    <div className='ms-2 py-2'>
                        <h5 className='p-0 m-0 pb-1'> {header} </h5>
                        <p className='p-0 m-0'>{text}</p>
                    </div>
                    
             </div>
    )
}

export default ContactInfo ;