import React from "react";
import { List } from "./List";

const PaymentLists = () => {
    return (
        <ul className='list-group bg-transparent m-0 p-0'>
            <List  text ='Konga pay' />
            <List  text ='Wallet' />
            <List  text ='verve' />            
            <List  text ='Master Card' /> 
            <List  text ='visa' /> 
        </ul>
    )
}

export default PaymentLists ;