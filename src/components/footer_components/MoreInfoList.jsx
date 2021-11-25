import React from "react";
import { List } from "./List";

const MoreInfoLists = () => {
    return (
        <ul className='list-group bg-transparent m-0 p-0'>
            <List  text ='Site Map' />
            <List  text ='Track My Order' />
            <List  text ='Privacy Policy' />            
            <List  text ='Authentic Item Policy' />                
        </ul>
    )
}

export default MoreInfoLists ;