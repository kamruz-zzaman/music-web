import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Styles from "./CreatePlaylist.module.css";

export default function CreatePlaylist() {
    const [inputs, setInputs] = useState({});

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        localStorage.setItem('playlist',JSON.stringify([{name:data.playlistName,songs:[]}]))
    }
    console.log(errors);

    return (
        <>
            <div
                className={`row d-flex justify-content-center align-items-center px-0 mx-0 ${Styles.createPlaylistForm}`}
            >
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
                        playlist
                    </div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className={`text-light fs-1 bg-transparent my-3 ${Styles.customInput}`}
                                type="text"
                                defaultValue="Untitled Playlist"
                                {...register("playlistName", { required: true, maxLength: 80 })}
                            />
                            <input type="submit" value={'Create'} />
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p className="mt-4 fs-2 text-light">Let's find something for your playlist</p>
                </div>
                <div className={`input-group mb-3 ${Styles.w_50} `}>
                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div>
            </div>
        </>
    );
}
