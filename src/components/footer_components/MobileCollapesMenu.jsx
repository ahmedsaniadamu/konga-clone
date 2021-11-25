import React from 'react' ;

//footer components that contains unordered  list 
import AboutLists from './AboutList'
import PaymentLists from './PaymentList'
import BuyingLists from './BuyingList'
import MoreInfoLists from './MoreInfoList'
import MakeMoneyOnKongaLists from './MakeMoneyOnKongaList'
import ConnectWithUs from './ConnectWithUs' ;

const MobileCollapsedMenu = () => {

    const [isOpened , setIsOpened ] = React.useState(false)
    const showMore = () => setIsOpened( !isOpened ) ;

    return ( 
             <div>
                    <h5
                        data-bs-toggle="collapse" 
                        data-bs-target="#parent" 
                        onClick={ showMore }
                        className='m-0 p-3 d-flex justify-content-between header' >

                            <span> { isOpened ? 'View Less' : 'View More'} </span>
                                
                            { isOpened ? 
                                        <i className='fas fa-chevron-up'></i>
                                        : <i className='fas fa-chevron-down'></i> 
                            }
                    </h5>
                    <div id="parent" class="collapse">
                         <SubMobileCollapsedMenu />
                    </div>
            </div>
    )
}

const SubMobileCollapsedMenu = () => {
    return(
        <div id="accordion">
            <Card header = 'About us' href = '#collapse1' id = 'collapse1' body = { <AboutLists /> } />
            <Card header = 'Payments' href = '#collapse2' id = 'collapse2' body = { <PaymentLists /> } />
            <Card header = 'Buying On Konga' href = '#collapse3' id = 'collapse3' body = { <BuyingLists /> } />
            <Card header = 'More Info' href = '#collapse4' id = 'collapse4' body = { <MoreInfoLists /> } />
            <Card header = 'Make Money On Konga' href = '#collapse5' id = 'collapse5' body = { <MakeMoneyOnKongaLists /> } />
            <Card header = 'Download & Connect With Us' href = '#collapse6' id = 'collapse6' body = { <ConnectWithUs /> } />          
        </div>  
    )
}

const Card = ({ href , header , body , id }) => {
    
    const cardHeaderStyle = 'card-header d-flex justify-content-between px-2'

     return (
            <div className="card">
                <div className={ cardHeaderStyle } data-bs-toggle="collapse" href={ href }>
                    <span> { header } </span> <i className="fas fa-chevron-right"></i>
                </div>
                <div id={id} className="collapse" data-bs-parent="#accordion">
                    <div className="card-body py-0">
                          { body }
                    </div>
                </div>
        </div>
     )
}

export default MobileCollapsedMenu ;