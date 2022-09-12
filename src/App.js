import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './pages/HomePage/Home';
import Playlist from './pages/Playlist/Playlist.js';

export default function App() {
  return (

      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/search' element={<Playlist />} />
          <Route path='/library' element={<Playlist />} />
          <Route path='/playlist' element={<Playlist />} />
          <Route path='/liked' element={<Playlist />} />
        </Routes>
      </Layout>

  )
}
