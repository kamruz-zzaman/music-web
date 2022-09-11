import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import FavouritesMusic from './components/FavouritesMusic/FavouritesMusic';
import Layout from './components/layout/Layout';
import Login from './components/Login/Login';
import Playlist from './components/Playlist/Playlist';
import Home from './pages/HomePage/Home';


export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="favourites_music" element={<FavouritesMusic />} />
          <Route path="playlist" element={<Playlist />} />
        </Routes>
      </Layout>
    </>
  )
}
