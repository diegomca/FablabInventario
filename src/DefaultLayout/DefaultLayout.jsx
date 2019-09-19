
import React from 'react'

import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader'; 

//import './DefaultLayout.css';

export default function DefaultLayout() {
    return (
        <div className = 'app'>
            <DefaultHeader/>
            <div className = 'app-body'>
                <main className = 'main'>

                </main>
            </div>  
            <DefaultFooter/>      
        </div>
    )
}
