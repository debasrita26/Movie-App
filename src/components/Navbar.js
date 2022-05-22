import React from 'react';
import {handleAddToList } from '../actions';

class Navbar extends React.Component{
    handleAddToMovies = (movie) => {
        this.props.dispatch(handleAddToList(movie));
      };
    render(){
        return (
            <div className="nav">
                <div className='search-container'>
                    <input />
                    <button id='search-btn'>Search</button>
                    {<div className="movie-info">
                        <span>{movie.Title}</span>
                        <button onClick={() => this.handleAddToMovies(movie)}>
                            Add To Movies
                        </button>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Navbar;
