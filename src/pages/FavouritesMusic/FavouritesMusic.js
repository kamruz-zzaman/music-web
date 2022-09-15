import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Styles from './FavouritesMusic.module.css';
export default function FavouritesMusic() {
  const [inputs, setInputs] = useState({});

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);
  return (
    <>
            <div  className={`row d-flex justify-content-center align-items-center px-0 mx-0 ${Styles.createPlaylistForm} ${Styles.shadow}`}>
                <div className="col-4 d-flex justify-content-center align-items-center">
                    <img
                        className={`img-fluid ${Styles.customImgShadow}`}
                        height="200px"
                        width="200px"
                        src="./img/playerdisk.jpg"
                        alt="#"
                    />
                </div>
                <div className="col-8">
                    <div className="text-light fs-4">
                        Playlist
                    </div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className={`text-light fs-1 fw-bold bg-transparent my-3 ${Styles.customInput}`}
                                type="text"
                                defaultValue="Liked Songs"
                                {...register("First name", { required: true, maxLength: 80 })}
                            />
                        </form>
                    </div>
                    <div className="text-light fs-4">
                        user name
                    </div>
                </div>
            </div>
            <div className=' '>
                <div>
                    <p className=" d-flex justify-content-center align-items-center mt-4 fs-2 text-light">Songs you like will appear heres</p>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                  <Link to="/search" className='light rounded-pill fw-bold py-2 px-4 '>Find Songs</Link>
                </div>
            </div>
        </>
  )
}
