import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import Playlist from './pages/Playlist/Playlist.js';
  
export default function App() {
  const [globalAudioTrack, setGlobalAudioTrack] = useState()
  return (
      <Layout globalAudioTrack={globalAudioTrack}>
        <Routes>
          <Route path='/' element={<Home setGlobalAudioTrack={setGlobalAudioTrack} />} />
          <Route path='/home' element={<Home setGlobalAudioTrack={setGlobalAudioTrack} />} />
          <Route path='/search' element={<Playlist setGlobalAudioTrack={setGlobalAudioTrack} />} />
          <Route path='/library' element={<Playlist setGlobalAudioTrack={setGlobalAudioTrack} />} />
          <Route path='/playlist' element={<Playlist />} />
          <Route path='/liked' element={<Playlist />} />
        </Routes>
      </Layout>

  )
}
