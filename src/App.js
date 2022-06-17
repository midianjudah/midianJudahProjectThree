import './App.css';
// Impot AXIOS package
import axios from 'axios';
// Import useEffect & useState Hook
import { useEffect, useState } from 'react';
// Import header
import Header from './Header';
// Import form

function App() {
  // console.log('App has rendered');

  // useState FIRST
  const [ randomArtist, setRandomArtist ] = useState([]);

  // Here we impliment AXIOS
  useEffect( () => {
    axios({
      url: `http://ws.audioscrobbler.com/2.0/`,
      method: `GET`,
      dataResponse: `json`,
      params: {
        key: `f26c9d8874c4331577c88575e4046583`,
        format: `json`,
      }
      .then ( jsonData => {
        console.log(jsonData);
      })
    })
  })


  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
