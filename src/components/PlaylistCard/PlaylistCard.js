import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Styles from './PlaylistCard.module.css';

export default function PlaylistCard({ item, index }) {
  return (
    <div className="p-3 col-12 col-sm-6 col-md-4 col-lg-3 position-relative ">
      <NavLink className={`${Styles.navlink}`} to={`/playlist/${index}`}>
        <Card className={`text-light ${Styles.musicCard}`} style={{ width: "13rem" }}>
          <Card.Img variant="top" src={`./img/playerdisk.jpg`} />
          <Card.Body>
            <Card.Title className={`fs-6 fw-bold`}>{item.name}</Card.Title>
          </Card.Body>
        </Card>
      </NavLink>
    </div>
  )
}
