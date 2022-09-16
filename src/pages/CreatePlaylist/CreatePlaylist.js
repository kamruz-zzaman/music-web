import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Styles from "./CreatePlaylist.module.css";

export default function CreatePlaylist() {
    const [playlist, setPlaylist] = useState();
    const [update, setUpdate] = useState(Math.random())
    
    useEffect(()=>{
        setPlaylist(localStorage.getItem('playlist')?JSON.parse(localStorage.getItem('playlist')):[])
    },[update])
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        localStorage.setItem('playlist',JSON.stringify([
            ...playlist,
            {name:data.playlistName,songs:[]}
        ]))
        
        setUpdate(Math.random())
        alert('Playlist created successfully!')
        window.location.reload();   
    }

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
                        Type playlist name here 👇
                    </div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className={`text-light fs-1 bg-transparent my-3 ${Styles.customInput}`}
                                type="text"
                                defaultValue="Untitled Playlist"
                                {...register("playlistName", { required: true, maxLength: 80 })}
                            />
                            <input style={{
                                background:'#000000',
                                padding:'15px 50px',
                                color:'white',
                                fontWeight:'bold',
                                borderRadius:'30px'
                            }} type="submit" value={'Create'} />
                        </form>
                    </div>
                </div>
            </div>
            
        </>
    );
}
