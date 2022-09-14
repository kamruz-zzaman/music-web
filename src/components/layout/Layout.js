import React from 'react';
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';
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
                    {
                        globalAudioTrack && (
                            <div className={`row px-0 mx-0 fixed-bottom ${styles.player}`} >
                                <div className={`col-3 d-flex px-5 justify-content-start align-items-center`}>
                                    <img width={60} height={60} style={{ boxShadow: '0 0 10px #000' }} src={globalAudioTrack?.images?.coverart} />
                                    <div className={`fw-bold ms-3 text-white`} >{globalAudioTrack.title}</div>
                                </div>
                                <div className={`col-6 `} style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                    <div className='row d-flex'  >
                                        {/* <button className='col-4 bg-transparent border-0 fs-3 text-white'>
                                            <Icons.SkipBackwardFill />
                                        </button> */}
                                        <ReactPlayer
                                            height={'20px'}
                                            playing={true}
                                            controls={true}
                                            url={
                                                globalAudioTrack.hub.actions[1].uri
                                            }
                                        />
                                        {/* <button className='col-4 bg-transparent border-0 fs-3 text-white'>
                                            <Icons.PlayCircleFill />
                                        </button>
                                        <button className='col-4 bg-transparent border-0 fs-3 text-white'>
                                            <Icons.SkipForwardFill />
                                        </button> */}
                                    </div>

                                </div>
                                <div style={{height:'100%'}} className={`col-3 d-flex justify-content-end  px-5 align-items-center`}>
                                    <NavLink
                                        className={`rounded-pill fw-bold  d-flex justify-content-center align-items-center ${styles.navlink}`}
                                        to='/playlist'
                                    >
                                        Create Playlist
                                    </NavLink>
                                    
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}
