import React from 'react' ;

//footer components
import ContactInfo from './footer_components/ContactInfo' ;
import SubscribeForm from './footer_components/SubscribeForm';
import AboutLists from './footer_components/AboutList';
import PaymentLists from './footer_components/PaymentList';
import MobileCollapsedMenu from './footer_components/MobileCollapesMenu';
import MakeMoneyOnKongaLists from './footer_components/MakeMoneyOnKongaList';
import BuyingLists from './footer_components/BuyingList';
import ConnectWithUs from './footer_components/ConnectWithUs';
import MoreInfoLists from './footer_components/MoreInfoList';
import LiveChat from './footer_components/LiveChat';

 
const Footer = () => {
  
    return (
        <footer className='w-100 p-0 m-0 mt-2 mt-md-1'>
             <div className="d-flex contact-info flex-wrap justify-content-sm-around  flex-column flex-sm-row mb-0">
                     <ContactInfo 
                           header = 'EMAIL SUPPORT'
                           text = 'help@konga.com'
                           icon = 'fas fa-envelope'
                     />
                     <ContactInfo 
                           header = 'PHONE SUPPORT'
                           text = '+2349077270998 , +2349051986371'
                           icon = 'fas fa-phone'
                     />
                     <ContactInfo 
                           header = 'WHATSAPP'
                           text = '09077270998 , 09051986371'   
                           icon = 'fab fa-whatsapp'                       
                     />
                     <ContactInfo 
                           header = 'GET LATEST DEALS'
                           text = 'Our best promotions sent to your inbox'                                                        
                     />
                      
                     <div className="p-0 m-0 ">
                             <SubscribeForm />
                     </div>
             </div>

             { /* visible only for large screen devices */}
             <div className="footer-navigation-links d-none d-sm-flex justify-content-around pt-3">
                   <div className='ms-2'>
                       <h5 className='p-0 m-0'>About Us </h5>
                        <AboutLists />
                   </div>
                   <div className='ms-2'>
                       <h5 className='p-0 m-0'>Payment</h5>
                        <PaymentLists />
                   </div>
                   <div className='ms-2'>
                       <h5 className='p-0 m-0'>Buying On Konga </h5>
                        <BuyingLists/>
                   </div>
                   <div className='ms-2'>
                       <h5 className='p-0 m-0'> More Info </h5>
                        < MoreInfoLists />
                   </div>
                   <div className='ms-2'>
                       <h5 className='p-0 m-0'> Make Money On Konga </h5>
                        < MakeMoneyOnKongaLists />
                   </div>
                   <div>
                       <h5>   Download & Connect With Us </h5>
                        <ConnectWithUs />
                   </div>
             </div>

{ /* visible only in mobile devices */ }
             <div className="mobile-collapsed-container p-0 m-0 d-sm-none">
                    <MobileCollapsedMenu />
             </div>

             <fieldset className='w-100 m-0 p-0 h-0 float-none border-top pb-2 mt-3'>
                    <legend  className='w-auto d-block float-none mx-auto m-0 p-0 px-2'>
                           Copyright &copy; { `${ new Date().getFullYear()}`} Konga.com
                            all right reserved.
                    </legend>
             </fieldset>
             
{/* fixed chat icon that opens a modal after click. based on css position fixed relative to html tag */ }
        <LiveChat />
        </footer>
    )
}
 
export default Footer ;
