import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import CreatePlaylist from './pages/CreatePlaylist/CreatePlaylist';
import FavouritesMusic from './pages/FavouritesMusic/FavouritesMusic';
import Home from './pages/Home/Home';
import Playlist from './pages/Playlist/Playlist.js';
import Search from './pages/Search/Search';

export default function App() {
  const [globalAudioTrack, setGlobalAudioTrack] = useState()
  const [globalSearchTerm, setGlobalSearchTerm] = useState([])
  const [globalLoading, setGlobalLoading] = useState(false)
  const [globalSelected, setGlobalSelected] = useState(false)
  return (
    <Layout
      setGlobalLoading={setGlobalLoading}
      globalAudioTrack={globalAudioTrack}
      setGlobalSearchTerm={setGlobalSearchTerm}
      setGlobalSelected={setGlobalSelected}
    >
      <Routes>
        <Route path='/' element={<Home setGlobalAudioTrack={setGlobalAudioTrack} />} />
        <Route path='/home' element={<Home setGlobalAudioTrack={setGlobalAudioTrack} />} />
        <Route path='/search' element={<Search globalSelected={globalSelected} setGlobalSelected={setGlobalSelected} globalLoading={globalLoading} setGlobalAudioTrack={setGlobalAudioTrack} globalSearchTerm={globalSearchTerm} />} />
        <Route path='/library' element={<Playlist setGlobalAudioTrack={setGlobalAudioTrack} />} />
        <Route path='/playlist' element={<Playlist />} />
        <Route path='/createplaylist' element={<CreatePlaylist />} />
        <Route path='/liked' element={<FavouritesMusic />} />
      </Routes>
    </Layout>

  )
}
