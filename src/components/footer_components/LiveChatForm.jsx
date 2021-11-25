import React from 'react'

const LiveChatForm = () => {

    const [ input , setInput ] = React.useState({
        username : '' ,
        email : '' ,
        orderNumber : ''
    })

    const handleInputChange = event => setInput( { ...input , [event.target.name] : event.target.value} )

    return (
         <fieldset className=' m-0 p-0 h-auto float-none  mb-2 mx-auto' style={{ width:'90%'}}>
                <legend  className=' float-none mx-auto d-flex'>
                    <i className="fas fa-user"></i>
                </legend>
                <p className='px-1 p-0 m-0'>
                    Welcome to our live chat! please fill in the form below
                    to before starting chat.
                </p>

                <label htmlFor="username"> username  <span className="text-danger"> * </span></label>                
                <input 
                    type="text" name="username"
                     id="username"  placeholder='username..'
                      className='form-control py-1 ' value={input.username}
                      onChange = { handleInputChange }
                />

                <label htmlFor="email"> email <span className="text-danger"> * </span></label>                
                <input 
                    type="email" name="email"
                     id="email"  placeholder='email..'
                      className='form-control py-1  ' value={input.email}
                      onChange = { handleInputChange }
                />

               <label htmlFor="order"> Question / Order Number(s)<span className="text-danger"> * </span></label>                
                <input 
                    type="number" name="orderNumber"
                     id="order"  placeholder='order number..'
                      className='form-control py-1' value={input.orderNumber}
                      onChange = { handleInputChange }
                />

                <button className='btn btn-danger d-block mx-auto my-2 py-1 '>  Start the chat </button>
         </fieldset>
    )
}

export default LiveChatForm ;
