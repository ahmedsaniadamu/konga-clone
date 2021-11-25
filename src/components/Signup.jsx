import React from 'react'

const Signup = () => {

    const [ input , setInput ] = React.useState( {
        username : '' ,
        password : '' ,
        confirmPassword : '' ,
        email : '' ,
    })

    const handleInputChange = event => setInput({...input , [event.target.name] : event.target.value })
    
    return (
        <div className='signup-form d-block mx-auto border'>
             <div className=" mx-auto " style={{ width:'90%'}}>
                 <label htmlFor="username">
                          user name <i className="text-danger"> * </i> 
                 </label>
                 <input
                        type="text"
                         name="username" 
                          className='form-control py-1 input-style'
                          placeholder=' your username..'
                          id='username'
                          value = { input.username}
                          onChange = { handleInputChange }
                />

                <label htmlFor="email"> 
                        email address <i className="text-danger"> * </i> 
                </label>
                 <input
                        type="email"
                         name="email" 
                          className='form-control py-1 input-style'
                          placeholder='your email..'
                          id='email'
                          value = { input.email }
                          onChange = { handleInputChange }
                />

                <label htmlFor="password"> 
                        password <i className="text-danger"> * </i> 
                </label>
                 <input
                        type="password"
                         name="password" 
                          className='form-control py-1 input-style'
                          placeholder='password..'
                          id='password'
                          value = { input.password }
                          onChange = { handleInputChange }
                />

                <label htmlFor="confirmPassword"> 
                        confirm  password <i className="text-danger"> * </i> 
                </label>
                 <input
                        type="password"
                         name="confirmPassword" 
                          className='form-control py-1 input-style'
                          placeholder='confirm-password..'
                          id='confirm-password'
                          value = { input.confirmPassword }
                          onChange = { handleInputChange }
                />
                 
                <button style={{ width:170 }} className='btn btn-success py-1 input-style my-2 d-block mx-auto'>
                      Signup 
                </button>

             </div>
        </div>
    )
}

export default Signup
