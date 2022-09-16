import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import * as Icons from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import Styles from './MusicCard.module.css';

export default function MusicCard({ setGlobalAudioTrack, item, setModalValue,loveActive,playlistActive }) {
  const [playList, setPlayList] = useState([]);
  const [fevSongs, setFevSongs] = useState([])
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setPlayList(JSON.parse(localStorage.getItem('playlist'))?JSON.parse(localStorage.getItem('playlist')):[])
    setFevSongs(JSON.parse(localStorage.getItem('fev'))?JSON.parse(localStorage.getItem('fev')):[])
  }, [])

  const handleAddToPlaylist = (index, song, playList) => {
    playList[index].songs.push(song)
    localStorage.setItem('playlist', JSON.stringify(playList))
    setOpen(false)
    alert('Added to playlist successfully 👍')
  }


const addToFev =()=>{
  fevSongs.push(item)
  localStorage.setItem('fev',JSON.stringify(fevSongs))
  alert('Added to Favorite successfully ⭐')

}

  return (
    <div className="p-3 col-12 col-sm-6 col-md-4 col-lg-3 position-relative">
      {
        open && <>
          <div
            style={{
              position: 'absolute',
              zIndex: 10,
              height: '270px',
              width: '210px',
              overflow: 'auto'
            }} className='position-absolute bg-secondary z-modal '
          >
            <button onClick={() => setOpen(false)} style={{
              position: 'absolute',
              right: '0',
              display: 'flex',
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              width: 30,
              height: 30
            }}
            >X</button>
            <div className='fs-4 p-3'>Select Playlist</div>
            <div className='overflow-auto'>
              <ul className="">
                {
                  playList?.length>0? playList.map((list, i) =>
                    <li className={`list-group-item ${Styles.modulBtn}`}>
                      <button onClick={() => handleAddToPlaylist(i, item, playList)} >{list.name}</button>
                    </li>
                  ):(
                    <div>
                      No Playlist Available!
                    </div>
                  )
                }
              </ul>

            </div>
          </div>
        </>
      }
      <Card className={`text-light ${Styles.musicCard}`} style={{ width: "13rem" }}>
        {
        playlistActive&&
        <NavLink title='Add to playlist' className={`position-relative`} to={''}>
        <button onClick={() => setOpen(true)} data-bs-toggle="modal" data-bs-target="#myModal" className={`${Styles.addPlaylistBtn}`}>
            <Icons.PlusCircleFill />
          </button>
        </NavLink>
        }
        {loveActive&&<NavLink title='Add to favorite' className={`position-relative`} to={''}>
          <button className={`${Styles.likeBtn}`} onClick={() => addToFev()}>
            <Icons.StarFill className={`${Styles.likeBtnIcon}`} />
          </button>
        </NavLink>}


        <NavLink title='Play' className={`position-relative`} to={''}>
          <button className={`${Styles.playBtn}`} onClick={() => setGlobalAudioTrack(item)}>
            <Icons.PlayCircleFill />
          </button>
        </NavLink>
        <Card.Img variant="top" src={`${item.images.coverart}`} />
        <Card.Body>
          <Card.Title className={`fs-6 fw-bold`}>{item.title}</Card.Title>
          <Card.Text className={` text-secondary  fs-6`}>
            {/* {console.log(item.artists)}  */}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
