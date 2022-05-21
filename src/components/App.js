import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className='main'>
            <div className='tabs'>
              <div className='tab'>Movies</div>
              <div className='tab'>Favourites</div>
            </div>  

            <div className="list">
              {/* we can iterate over the movies using the data.map,then we will pass the movie to the moviecard via props*/}
              {data.map((movie,index) =>(
                  <MovieCard movie={movie} key={`movies-${index}`} />
              ))}
            </div>
        </div>
    </div>
  );
}

export default App;
