import React from 'react';
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import SIdebar from '../SIdebar/SIdebar';
import styles from './Layout.module.css';

export default function Layout({ children, setGlobalSelected, globalAudioTrack, setGlobalSearchTerm, setGlobalLoading }) {
    return (
        <div className={`${styles.container}`}>
            <div className="row px-0">
                <div className={`py-4 col-2 mx-0 px-0 ${styles.sidebar}`}>
                    <SIdebar />
                </div>
                <div className="col-10 position-relative mx-0 px-0">
                    <div className="row px-0 position-relative  mx-0">
                        <div className={`col-12 position-absolute top-0 px-0 mx-0 ${styles.navbar}`}>
                            <Navbar
                                setGlobalLoading={setGlobalLoading}
                                setGlobalSearchTerm={setGlobalSearchTerm}
                                setGlobalSelected={setGlobalSelected}
                            />
                        </div>
                        <div className={`col-12 mx-0 px-0 overflow-auto ${styles.content}`}>
                            {children}
                        </div>
                    </div>
                    {
                        globalAudioTrack && (
                            <div className={`row px-0 mx-0 fixed-bottom ${styles.player}`} >
                                <div className={`col-2 col-lg-3 d-flex px-lg-5 justify-content-start align-items-center`}>
                                    <img width={60} height={60} style={{ boxShadow: '0 0 10px #000' }} src={globalAudioTrack?.images?.coverart} />
                                    <div className={`fw-bold ms-3 text-white d-none d-lg-block`} >{globalAudioTrack.title}</div>
                                </div>

                                <div 
                                className={`col-10 col-lg-6 d-flex align-items-center justify-content-center flex-column`} 
                                style={{ height: '100%'}}
                                >
                                    <div className='row d-flex'  >
                                        <ReactPlayer
                                        width={'500px'}
                                            height={'20px'}
                                            playing={true}
                                            controls={true}
                                            url={
                                                globalAudioTrack.hub.actions[1].uri
                                            }
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{ height: '100%' }}
                                    className={`col-lg-3 d-none d-lg-flex justify-content-end  px-5 align-items-center`}
                                >
                                    <NavLink
                                        className={`rounded-pill fw-bold  d-flex  justify-content-center align-items-center ${styles.navlink}`}
                                        to='/createplaylist'
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
