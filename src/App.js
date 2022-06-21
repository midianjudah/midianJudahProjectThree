import './App.css';
// Impot AXIOS package
import axios from 'axios';
// Import useEffect & useState Hook
import { Component, useEffect, useState } from 'react';
// Import header
import Header from './Header';
// Import Form
import Form from './Form';
// Import Footer
import Footer from './Footer.js';
import { render } from '@testing-library/react';

function App() {
  console.log('App has rendered');

  //useState FIRST
  //const [ randomArtist, setRandomArtist ] = useState([]);

  const [selectArtist, setSelectArtist] = useState('');
  const [artistData, setArtistData] = useState([]);

  //Here we impliment AXIOS and the useEffect
  useEffect(() => {
    if (selectArtist != '') {
      axios({
        url: `http://ws.audioscrobbler.com/2.0/`,
        method: `GET`,
        dataResponse: `json`,
        params: {
          api_key: `f26c9d8874c4331577c88575e4046583`,
          artist: selectArtist,
          format: `json`,
          method: `artist.getSimilar`,
          limit: 10,
        }
      }).then(jsonData => {
        setArtistData(jsonData.data.similarartists.artist);
        console.log(jsonData.data.similarartists.artist)
      })
    }
  }, [selectArtist]);

  const selectArtistSelection = function (event, artist) {

    event.preventDefault();
    setSelectArtist(artist)
  }

  return (
    <div className="App">
      <Header />
      <Form handleSubmit={selectArtistSelection} selectArtist={selectArtist} artistData={artistData} />
      <Footer />
    </div>
  );
}


export default App;