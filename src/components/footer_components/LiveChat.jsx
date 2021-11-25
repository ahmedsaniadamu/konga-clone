import React from 'react'
import ReactTooltip from 'react-tooltip'
import LiveChatForm from './LiveChatForm';


const LiveChat = () => {
    
    const [ showTooltip , setShowTooltip ] = React.useState(false) ;
    const [  openModal , setOpenModal  ] = React.useState(false) ;
    
    const pageScroll = () => {
        if( window.scrollY > window.innerHeight ) setShowTooltip(true)
    }

    React.useEffect( () => {
        window.addEventListener('scroll' , pageScroll )
        return () => {
            window.removeEventListener('scroll' , pageScroll )
        }
    })

    const showModal = ( ) => setOpenModal(true) ;
    const hideModal = ( ) => setOpenModal(false) ;

    const image = `<img  src="${require('../../Assets/bbcimage37.jpg').default}" alt="konga agent" >`
    
    if(showTooltip){
        return (
                <div className= 'chat-us-container d-none d-md-block' >            
                    
                    <div className='chat-us'
                        data-for='chat-icon'
                        data-tip= { `<span id='tooltip'> ${image} Chat live with our agent! </span> `}
                        data-html = {true}   
                        onClick = { showModal }                                                           
                    >
                        <ReactTooltip 
                                place='right' 
                                id='chat-icon' 
                                className = 'm-0 p-0 px-1 tooltip-modal' 
                                backgroundColor='transparent'                          
                           /> 
        
                        <div className='shadow d-flex justify-content-center align-items-center'>
                            <span className="far fa-comment-alt"></span>                                     
                        </div>                     
                    </div>  
                    
                    { 
                       openModal && <div className='chat-modal shadow border'>
                           <div className="chat-modal-header p-2 d-flex justify-content-between border-bottom">
                                <span 
                                   className="fas fa-ellipsis-h"  
                                   data-for='menu' data-tip = 'open menu'>                                    
                                </span>

                                 <span className='welcome'> Welcome to konga </span>

                                <span className="fas fa-minus" onClick = { hideModal }
                                      data-for='menu' data-tip = 'Close window'>                                    
                                </span>

                                <ReactTooltip id='menu' className='m-0 py-1 tip' backgroundColor='rgb(233, 1, 117)'  />
                           </div>
                           <div className="chat-modal-body">
                                <div className="chat-box">
                                     <span>  
                                           <img 
                                               src={require('../../Assets/bbcimage37.jpg').default}
                                                alt="agent" 
                                                style={{ height : 30 , width : 30 , objectFit :'cover'}}
                                                className='rounded-circle mx-1'
                                            />
                                            Janeth <small> 
                                                       <i> {`${new Date().toLocaleTimeString()}`} </i>
                                                  </small>
                                     </span>
                                    <p className='py-1 mt-1 ms-4 px-1'>
                                          Hello! how can i help you ? 
                                    </p>
                                </div>
                               <LiveChatForm />
                           </div>
                       </div>
                    }
            </div>
        )
    }
    else{  return (  <> </> )  } 

}

export default LiveChat

 
 