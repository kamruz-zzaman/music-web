import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
export default function SIdebar() {
    return (
        <div className={`${styles.sidebar} my-0 py-0`}>
            <NavLink to="/" >
                <div className={`d-flex justify-content-center`}>
                    <img src="./img/logo.png" className={`img-fluid ${styles.logo}`} alt="" />
                </div>
            </NavLink>
            <div className='py-3 text-white d-column-flex align-items-center justify-content-center'>
                <ul className='list'>
                    <li className={`${styles.routes} list-group-item my-4 fs-6s align-items-center  flex justify-content-center`}>
                        <NavLink
                            activeClassName={`${styles.activeNavLink}`}
                            className={`${styles.navlink}`}
                            to="/home"
                        >
                            <Icon.HouseDoorFill className='me-3 fs-4 fw-bold' /> Home
                        </NavLink>
                    </li>
                    <li className={`${styles.routes} list-group-item my-4 fs-6  align-items-center  flex justify-content-centerv`}>
                        <NavLink
                            activeClassName={`${styles.activeNavLink}`}
                            className={`${styles.navlink}`}
                            to="/search"
                        >
                            <Icon.Search className='me-3 fs-4 fw-bold' /> Search
                        </NavLink>

                    </li>
                    <li className={`${styles.routes} list-group-item my-4 fs-6  align-items-center  flex justify-content-center`}>
                        <NavLink
                            activeClassName={`${styles.activeNavLink}`}
                            className={`${styles.navlink} light`}
                            to='/library'
                        >
                            <Icon.StackOverflow  className='me-3 fs-4 fw-bold' /> Your Library
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='text-white d-column-flex  align-items-center justify-content-center'>
                <ul className='list'>
                    <li className={`${styles.routes} list-group-item my-4 fs-6s align-items-center  flex justify-content-center`}>
                        <NavLink
                            activeClassName={`${styles.activeNavLink}`}
                            className={`${styles.navlink}`}
                            to='/createplaylist'
                        >
                            <Icon.PlusSquareFill className='me-3 fs-4 fw-bold' /> Create Playlist
                        </NavLink>
                    </li>
                    <li className={`${styles.routes} list-group-item my-4 fs-6  align-items-center  flex justify-content-centerv`}>
                        <NavLink
                            activeClassName={`${styles.activeNavLink}`}
                            className={`${styles.navlink}`}
                            to='/liked' 
                        >
                            <Icon.HeartFill className='me-3 fs-4 fw-bold' /> Liked Songs
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
