import React from "react";
import { List } from "./List";

const BuyingLists = () => {
    return (
        <ul className='list-group bg-transparent m-0 p-0'>
            <List  text ='Buyer Safety Center' />
            <List  text ='FAQS' />
            <List  text ='Delivery' />            
            <List  text ='Konga Return Policy' /> 
            <List  text ='Digital Services' /> 
            <List  text ='Bulk Purchase' /> 
        </ul>
    )
}

export default BuyingLists ;