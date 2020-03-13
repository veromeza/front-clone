import React from 'react';
import Navbar from './Navbar';

//import MasterHead from './MasterHead';


function Layout (props) {

    return (
        <>
        <Navbar/>
        {/* <MasterHead title={props.title} subtitle={props.subtitle} /> */}
      
                    {props.children}
       
        </>
    )
}

export default Layout;