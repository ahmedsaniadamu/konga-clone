import React from "react";
import { List } from "./List";

const AboutLists = () => {
    return (
        <ul className='list-group bg-transparent m-0 p-0'>
            <List  text ='Contact Us' />
            <List  text ='About us' />
            <List  text ='Careers' />
            <List  text ='Our Blog' />
            <List  text ='Forum' />
            <List  text ='Terms & Conditions' />
        </ul>
    )
}

export default AboutLists ;