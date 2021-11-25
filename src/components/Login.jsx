import React , { useState } from 'react'

const Login = () => {

    const [ input , setInput ] = useState({
        email : '' ,
        password : ''
    })

    const handleInputChange = event => setInput({...input, [event.target.name] : event.target.value })

    return (
        <div className='login d-block mx-auto'>
                
              <fieldset className='w-100 m-0 p-0 h-0 float-none border mb-2'>
                    <legend  className='w-auto d-block float-none mx-auto d-flex'>
                          <i className="fas fa-user"></i>
                    </legend>

                    <input
                          type="email"
                           name="email" 
                           value={ input.email }
                           style={{ width: '90%' }}
                           placeholder='email address..'
                           className='form-control mx-auto py-1'    
                           onChange={ handleInputChange }                       
                           />

                      <input
                          type="password"
                           name="password" 
                           value={ input.password }
                           placeholder='password..'
                           className='form-control mt-2 mx-auto py-1' 
                           style={{ width:'90%' }}   
                           onChange={ handleInputChange }                       
                           />

                       <button style={{ width:140 }} className='btn btn-success py-1 my-2 d-block mx-auto  '>
                            Login
                        </button>
              </fieldset>
        </div>
    )
}

export default Login
