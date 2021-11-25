import React from "react";

const SubscribeForm = () => {
    
    const [ emailInput , setEmailInput ] = React.useState('') ;

     const  handleInputChange = event => setEmailInput(event.target.value)

    return (
                <div className="input-group input-group-sm py-1 ms-1 mt-1">
                        <input
                            type="email" 
                            className="form-control py-1 ps-1" 
                            placeholder="email address..." 
                            onChange={ handleInputChange}
                            value={ emailInput}
                        />

                        <span className="input-group-text py-1"> 
                              Subscribe
                        </span>
             </div>
    )
}

export default SubscribeForm ;