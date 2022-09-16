import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MusicCard from '../../components/MusicCard/MusicCard';
import Styles from './FavouritesMusic.module.css';
export default function FavouritesMusic({ setGlobalAudioTrack }) {
    const [fevSongs, setFevSongs] = useState([]);
    useEffect(() => {
        setFevSongs(JSON.parse(localStorage.getItem('fev')) ? JSON.parse(localStorage.getItem('fev')) : [])
    }, [])
    return (
        <>
            <div className={`row d-flex justify-content-center align-items-center px-0 mx-0 ${Styles.createPlaylistForm} ${Styles.shadow}`}>
                <div className="col-3 d-flex justify-content-center align-items-center">
                    <img
                        className={`img-fluid`}
                        height="200px"
                        width="200px"
                        src="./img/playerdisk.png"
                        alt="#"
                    />
                </div>
                <div className="col-9">
                    <div>
                        <span className={`text-light fs-1 fw-bold bg-transparent my-3 ${Styles.customInput}`}
                        >Favourite Songs</span>
                    </div>

                </div>
            </div>
            <div className=' '>
                <div className="row  m-0 pt-5 ">
                    {
                        (fevSongs?.length > 0) ?
                            fevSongs.map((song, i) =>
                                <>
                                    <MusicCard key={`${i+Math.random()}`} loveActive={false} playlistActive={true} setGlobalAudioTrack={setGlobalAudioTrack} item={song} />
                                </>
                            )
                            :
                            (
                                <p className=" d-flex justify-content-center align-items-center mt-4 fs-2 text-light">
                                    Songs you like will appear heres
                                </p>
                            )
                    }
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <Link to="/search" className={`light rounded-pill fw-bold py-2 px-4 ${Styles.link} `}>Find Songs</Link>
                </div>
            </div>
        </>
    )
}
