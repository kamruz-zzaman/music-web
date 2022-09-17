import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import MusicCard from "../../components/MusicCard/MusicCard";
import PlaylistCard from "../../components/PlaylistCard/PlaylistCard";
import Styles from './Home.module.css';


export default function Home({ setGlobalAudioTrack }) {

  const [fevSongs, setFevSongs] = useState([]);
  const [playlist, setPlaylist] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setFevSongs(JSON.parse(localStorage.getItem('fev')) ? JSON.parse(localStorage.getItem('fev')) : [])
    setPlaylist(JSON.parse(localStorage.getItem("playlist")) ? JSON.parse(localStorage.getItem("playlist")) : [])
  }, [])


  return (
    <>
      <div className={`pt-5 px-0 mx-0 ${Styles.container}`} >
        <div className={`pt-5 px-0 mx-0 pb-5 ${Styles.container}`} >
          <div className="row m-0 pt-5 pb-5">

            <span className="text-light fs-1 fw-bold ">Playlists</span>
            {
              (playlist.length > 0) ?
                playlist.map((list, i) =>
                  <PlaylistCard key={i} item={list} index={i} />
                )
                : (
                  <div className="fs-3 py-5 text-center text-light fw-bold">
                    You haven't any playlist
                    <NavLink
                      className={`rounded-pill fw-bold  d-flex  justify-content-center align-items-center ${Styles.navlink}`}
                      to='/createplaylist'
                    >
                      Create Playlist
                    </NavLink>
                  </div>
                )
            }
            <span className="text-light fs-1 fw-bold ">Favorite</span>
            {
              (fevSongs.length > 0) ?
              fevSongs.map((song, i) =>
                <MusicCard key={i} loveActive={false} playlistActive={true} setGlobalAudioTrack={setGlobalAudioTrack} item={song} />
              ):(
                <div className="fs-3 py-5 text-center text-light fw-bold">
                    You haven't favorite song!
                    <NavLink
                      className={`rounded-pill fw-bold  d-flex  justify-content-center align-items-center ${Styles.navlink}`}
                      to='/search'
                    >
                      Search songs
                    </NavLink>
                  </div>
              )
            }

          </div>
        </div>
      </div>
    </>
  )
}

