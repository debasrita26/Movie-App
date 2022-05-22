import React from 'react';
import {addMovieToList } from '../actions';

class Navbar extends React.Component{
    handleAddToMovies = (movie) => {
        this.props.dispatch(addMovieToList(movie));
    }
    render(){
        return (
            <div className="nav">
                <div className='search-container'>
                    <input />
                    <button id='search-btn'>Search</button>
                    {
                        <div className='movie-info'>
                            <button onClick={() => this.handleAddToMovies(this.props.search.result)}>Add To Movies</button>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Navbar;
