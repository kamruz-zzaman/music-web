import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MusicCard from '../../components/MusicCard/MusicCard';
import Styles from './Playlist.module.css';

export default function Playlist({setGlobalAudioTrack}) {
  const {index} = useParams()
  const [music, setMusic] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    console.log(index)
    setPlaylist(JSON.parse(localStorage.getItem('playlist'))[index])
    setMusic(JSON.parse(localStorage.getItem('playlist'))?JSON.parse(localStorage.getItem('playlist'))[index].songs:[])
  }, [index])
  console.log(music);
  return (
    <div className={`pt-5 px-0 mx-0 pb-5 ${Styles.container}`} >
      <div className="row m-0 pt-5 pb-5">
        <span className="text-light fs-1 fw-bold ">{playlist.name}</span>
        {
          music.length>0?
        music.map((item) => (   
          <MusicCard  loveActive={true} playlistActive={false} item={item} setGlobalAudioTrack={setGlobalAudioTrack} />
        )):
        <div className="fs-4 fw-bold text-light mt-5">
        No song found
        </div>
        }
      </div>
    </div>
  );
}
