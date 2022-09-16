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
                            className={`${styles.navlink} d-flex`}
                            to="/home"
                        >
                            <Icon.HouseDoorFill className='me-3 fs-4 fw-bold' /><span className='d-none d-md-block '>Home</span>
                        </NavLink>
                    </li>
                    <li className={`${styles.routes} list-group-item my-4 fs-6  align-items-center  flex justify-content-centerv`}>
                        <NavLink
                            className={`${styles.navlink} d-flex`}
                            to="/search"
                        >
                            <Icon.Search className='me-3 fs-4 fw-bold' /> <span className='d-none d-md-block'>Search</span>
                        </NavLink>

                    </li>
                    
                </ul>
            </div>
            <div className='text-white d-column-flex  align-items-center justify-content-center'>
                <ul className='list'>
                    <li className={`${styles.routes} list-group-item my-4 fs-6s align-items-center  flex justify-content-center`}>
                        <NavLink
                            className={`${styles.navlink} d-flex`}
                            to='/createplaylist'
                        >
                            <Icon.PlusSquareFill className='me-3 fs-4 fw-bold' /> <span className='d-none d-md-block '>Create Playlist</span>
                        </NavLink>
                    </li>
                        
                    <li className={`${styles.routes} list-group-item my-4 fs-6  align-items-center  flex justify-content-centerv`}>
                        <NavLink
                            className={`${styles.navlink} d-flex`}
                            to='/liked'
                        >
                            <Icon.HeartFill className='me-3 fs-4 fw-bold' /><span className='d-none d-md-block '>Liked Song</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
