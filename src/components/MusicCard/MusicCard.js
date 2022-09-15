import React from 'react';
import { Card } from 'react-bootstrap';
import * as Icons from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import Styles from './MusicCard.module.css';
export default function MusicCard({setGlobalAudioTrack,item}) {
  return (
    <div className="p-3 col-3">
      {console.log('Card',item)}
            <Card className={`text-light ${Styles.musicCard}`}  style={{ width: "13rem" }}>
              <NavLink className={`position-relative`} to={''}>
                <button onClick={()=>setGlobalAudioTrack(item)}><Icons.PlayCircleFill className={`${Styles.playBtn}`} /></button>
              </NavLink>
              <Card.Img variant="top" src={`${item.images.coverart}`} />
              <Card.Body>
                <Card.Title className={`fs-6 fw-bold`}>{item.title}</Card.Title>
                <Card.Text  className={` text-secondary  fs-6`}>
                  {/* {console.log(item.artists)}  */}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
  )
}
