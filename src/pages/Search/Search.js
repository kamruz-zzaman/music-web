import axios from "axios";
import React, { useState } from "react";
import MusicCard from '../../components/MusicCard/MusicCard';
import Styles from './Search.module.css';
const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
    params: { key: '484129036', locale: 'en-US' },
    headers: {
        'X-RapidAPI-Key': '028c969847mshe4bf104e18216f7p1bc2c4jsn93e4de04c4cf',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
};
export default function Search({ globalSearchTerm, setGlobalAudioTrack, globalLoading, setGlobalSelected, globalSelected }) {
    const [artist, setArtist] = useState()
    const [track, setTrack] = useState()

    const handleGetSong = (term) => {
        setGlobalSelected(true)
        const options = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/search',
            params: { term: term, locale: 'en-US', offset: '0', limit: '5' },
            headers: {
                'X-RapidAPI-Key': '028c969847mshe4bf104e18216f7p1bc2c4jsn93e4de04c4cf',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            console.log(response);
            setTrack(response.data.tracks);
            setArtist(response.data.artists);
        }).catch(function (error) {
            console.error(error);
        });
    }
    return (
        <div className={`pt-5 px-0 mx-0 ${Styles.container}`} >
            <div className="row m-0 pt-5">
                {
                    globalLoading ? (
                        <div style={{ color: 'white', textAlign: 'center' }}>Loading...</div>
                    ) : (
                        !globalSelected && globalSearchTerm?.map(term =>
                            <button style={{
                                borderRadius: '30px',
                                backgroundColor: '#000',
                                color: 'white',
                                marginBottom: '5px',
                                padding: '10px '
                            }} onClick={() => handleGetSong(term.term)} >{term.term}</button>
                        )
                    )
                }

                <>
                    {track && artist && (
                        <>
                            <span className="fs-2 text-light fw-bold">Search result</span>
                            {track.hits.map((item) =>
                            (

                                <MusicCard item={item.track} setGlobalAudioTrack={setGlobalAudioTrack} />


                            ))}
                        </>
                    )
                        // : (
                        //     <>
                        //     {globalSelected && (!track && !artist) &&(<>
                        //         <span className="fs-2 text-light fw-bold">Search result</span>
                        //         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
                        //             <h1 style={{color:'white'}}>No result found!</h1>
                        //         </div>
                        //     </>)}
                        //     </>
                        // )
                    }
                </>

            </div>
        </div >
    );
}
