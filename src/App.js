import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './Header';
import Form from './Form';
import Footer from './Footer.js';

function App() {
  
  const [selectArtist, setSelectArtist] = useState('');
  const [artistData, setArtistData] = useState([]);

  //Here we impliment AXIOS and the useEffect
  useEffect(() => {
    if (selectArtist !== '') {
      axios({
        url: `https://ws.audioscrobbler.com/2.0/`,
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