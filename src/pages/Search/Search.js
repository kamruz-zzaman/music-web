import axios from "axios";
import React, { useState } from "react";
import MusicCard from '../../components/MusicCard/MusicCard';
import Styles from './Search.module.css';

export default function Search({ globalSearchTerm, setGlobalAudioTrack, globalLoading, setGlobalSelected, globalSelected }) {
    const [artist, setArtist] = useState()
    const [track, setTrack] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')


    const handleGetSong = (term) => {
        setSearchTerm(term)
        setGlobalSelected(true)
        const options = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/search',
            params: { term: term, locale: 'en-US', offset: '0', limit: '5' },
            headers: {
                'X-RapidAPI-Key': '399ba7356fmsh73e9d3a8ccb8320p1340e4jsn33bccd8edd99',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        };
        setIsLoading(true)
        axios.request(options).then(function (response) {
            setTrack(response.data.tracks);
            setArtist(response.data.artists);

        }).then(() => setIsLoading(false)).catch(function (error) {
            console.error(error);
        });
    }
    return (
        <div className={`py-5 px-0 mx-0 ${Styles.container}`} >
            <div className="row m-0 py-5 px-3">
                {
                    !globalSelected && globalSearchTerm?.map((term,i) =>
                        <button key={i} className={`px-4 mb-2 text-light d-flex fw-bold align-items-center ${Styles.resultBtn}`} onClick={() => handleGetSong(term.term)} >{term.term}</button>
                    )
                }
                {isLoading ? (
                    <>
                        {
                            searchTerm === '' ? (
                                <div className="fs-1 text-center text-light fw-bold">
                                    Please search your song
                                </div>
                            ) : (
                                <div className="fs-1 text-center text-light fw-bold">
                                    Loading..
                                </div>
                            )
                        }
                    </>) : (
                    <>
                        {
                            track && artist && (
                                <>
                                    <span className="fs-2 text-light fw-bold">Search result</span>
                                    {
                                        <>
                                            {
                                                track.hits.map((item) =>
                                                (
                                                    <MusicCard loveActive={true} playlistActive={true} item={item.track} setGlobalAudioTrack={setGlobalAudioTrack} />
                                                ))
                                            }
                                        </>
                                    }
                                </>
                            )
                        }
                    </>)}

            </div>
        </div >
    );
}
