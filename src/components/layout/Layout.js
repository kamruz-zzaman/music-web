import React from 'react';
import { NavLink } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import Navbar from '../Navbar/Navbar';
import Playlist from '../Playlist/Playlist';
import styles from './Layout.module.css';

export default function Layout({ children }) {
    return (
        <div class="row px-0">
            <div class={`py-4 col-2 mx-0 px-0 ${styles.sidebar}`}>
                <div className='w-100 d-flex justify-content-center'>
                    <img src="./img/logo.png" class={`img-fluid ${styles.logo}`} alt="" />
                </div>
                <div className=' ps-3 py-3 text-white d-column-flex  align-items-center justify-content-center'>
                    <ul className='list'>
                        <li className={`${styles.routes} list-group-item my-4 fs-6s align-items-center  flex justify-content-center`}>
                           <NavLink activeClassName={`${styles.activeNavLink}`} className={`${styles.navlink}`}  to="/home"><Icon.House className='me-3 fs-4 fw-bold' /> Home</NavLink>
                            
                        </li>
                        <li className={`${styles.routes} list-group-item my-4 fs-6  align-items-center  flex justify-content-centerv`}>
                        <NavLink activeClassName={`${styles.activeNavLink}`} className={`${styles.navlink}`}  to="/search"><Icon.Search className='me-3 fs-4 fw-bold' /> Search</NavLink>
                            
                        </li>
                        <li className={`${styles.routes} list-group-item my-4 fs-6  align-items-center  flex justify-content-center`}>
                        <NavLink activeClassName={`${styles.activeNavLink}`} className={`${styles.navlink}`}  to="/laibrary"><Icon.HouseDoor className='me-3 fs-4 fw-bold' /> Your Library</NavLink>
                        
                        </li>
                    </ul>
                </div>
                <div className=' ps-3 text-white d-column-flex  align-items-center justify-content-center'>
                    <ul className='list'>
                        <li className={`${styles.routes} list-group-item my-4 fs-6s align-items-center  flex justify-content-center`}>
                        <NavLink activeClassName={`${styles.activeNavLink}`} className={`${styles.navlink}`}  to="/playlist"><Icon.PlusSquareFill className='me-3 fs-4 fw-bold' /> Create Playlist</NavLink>
                            
                        </li>
                        <li className={`${styles.routes} list-group-item my-4 fs-6  align-items-center  flex justify-content-centerv`}>
                            <NavLink activeClassName={`${styles.activeNavLink}`} className={`${styles.navlink}`} to="/likesongs"><Icon.HeartFill className='me-3 fs-4 fw-bold' /> Liked Songs</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-10 mx-0 px-0">
                <div class="row px-0">
                    {/*      */}
                    <div class="col-12">{children}
                        <Navbar/>
                        <Playlist/>
                    </div>
                </div>
            </div>
        </div>
    )
}
