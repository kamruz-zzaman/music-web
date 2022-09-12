import React from 'react';
import Navbar from '../Navbar/Navbar';
import SIdebar from '../SIdebar/SIdebar';
import styles from './Layout.module.css';

export default function Layout({ children }) {
    return (
        <div className={`${styles.container}`}>
            <div class="row px-0">
            <div class={`py-4 col-2 mx-0 px-0 ${styles.sidebar}`}>
                <SIdebar />
            </div>
            <div class="col-10 mx-0 px-0">
                <div class="row px-0 position-relative  mx-0">
                    <div class={`col-12 position-absolute top-0 px-0 mx-0 ${styles.navbar}`}>
                        <Navbar />
                    </div>
                    <div class="col-12 mx-0 px-0">
                        {children}
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}
