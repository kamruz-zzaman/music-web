import axios from "axios";
import React, { useEffect, useState } from "react";
import MusicCard from "../../components/MusicCard/MusicCard";
import Styles from './Home.module.css';

const options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
  params: { key: '484129036', locale: 'en-US' },
  headers: {
    'X-RapidAPI-Key': '028c969847mshe4bf104e18216f7p1bc2c4jsn93e4de04c4cf',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  }
};
export default function Home({ setGlobalAudioTrack }) {
  const [music, setMusic] = useState([]);
  useEffect(() => {
    axios.request(options).then(function (response) {
      setMusic(response.data.tracks);
    }).catch(function (error) {
      console.error(error);
    });
  }, [])
  return (
    <div className={`pt-5 px-0 mx-0 ${Styles.container}`} >
      <div className="row m-0 pt-5">
        <span className="text-light">Playlist</span>
        {music.map((item) => (
          <MusicCard item={item} setGlobalAudioTrack={setGlobalAudioTrack} />
        ))}
        
      </div>
    </div>
  );
}
