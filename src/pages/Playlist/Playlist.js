import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Styles from './Playlist.module.css';

const options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/songs/list-artist-top-tracks',
  params: { id: '40008598', locale: 'en-US' },
  headers: {
    'X-RapidAPI-Key': '028c969847mshe4bf104e18216f7p1bc2c4jsn93e4de04c4cf',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  }
};
export default function Playlist() {
  const [music, setMusic] = useState([]);
  console.log('====================================');
  console.log(music);
  console.log('====================================');
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
          <div className="p-3 col-3">
            <Card className={`text-light ${Styles.musicCard}`}  style={{ width: "13rem" }}>
              <Card.Img variant="top" src={`${item.images.coverart}`} />
              <Card.Body>
                <Card.Title className={`fs-6 fw-bold`}>{item.title}</Card.Title>
                <Card.Text  className={` text-secondary  fs-6`}>
                  Some quick example text to build on the card
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
