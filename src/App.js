import React from 'react';
import { data } from './data.js';
import Navbar from './Navbar.js';
import MovieCard from './MovieCard.js'


function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='main'></div>
      <div className='tabs'>
        <div className='tab'></div>
        <div className='tab'></div>
      </div>

      <div className='list'>
        {data.map(movie =>(
          <MovieCard movie={movie}/>
        ))}
      </div>
    </div>
    
  );
}

export default App;
