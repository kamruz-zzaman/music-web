import React from 'react';
import ReactPlayer from 'react-player';
import Navbar from '../Navbar/Navbar';
import SIdebar from '../SIdebar/SIdebar';
import styles from './Layout.module.css';

export default function Layout({ children, globalAudioTrack }) {
    return (
        <div className={`${styles.container}`}>
            <div className="row px-0">
                <div className={`py-4 col-2 mx-0 px-0 ${styles.sidebar}`}>
                    <SIdebar />
                </div>
                <div className="col-10 position-relative mx-0 px-0">
                    <div className="row px-0 position-relative  mx-0">
                        <div className={`col-12 position-absolute top-0 px-0 mx-0 ${styles.navbar}`}>
                            <Navbar />
                        </div>
                        <div className={`col-12 mx-0 px-0 overflow-auto ${styles.content}`}>
                            {children}
                        </div>
                    </div>
                    <div className="row px-0 mx-0 fixed-bottom">
                        <div className={`coll-12 ${styles.player}`}>
                            <ReactPlayer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
