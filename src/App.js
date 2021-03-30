//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      {/* <h1>Hello World</h1> */}
      {/* NavBar */}
      <Nav/>
      {/* Banner */}
      <Banner/>
      {/* Rows */}
      <Row title="NETFLIX ORIGINALS"  fetchUrl={requests.fetchIndflixOriginals} isLargeRow={true}/>
      <Row title="Trending Now"        fetchUrl={requests.fetchTrending}/>
      
    </div>
  );
}

export default App;