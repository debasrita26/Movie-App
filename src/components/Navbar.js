import React from 'react';
import { data } from '../data';
import {addMovieToList , handleMovieSearch} from '../actions';
import { search } from '../reducers';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showSearchResults:true,
            searchText: ''
        }
    }
    handleAddToMovies = (movie) => {
        this.props.dispatch(addMovieToList(movie));
        this.setState({
            showSearchResults:true
        })
    }
    handleSearch=()=>{
        const {searchText}=this.state;
        //fetching the data from server and send it to the store as well
        this.props.dispatch(handleMovieSearch(searchText));
    }
    handleChange=(e)=>{
        this.setState({
            searchText: e.target.value
        });
    };
    render(){
        const{showSearchResults}=this.state;
        return (
            <div className="nav">
                <div className='search-container'>
                    <input onChange={this.handleChange} />
                    <button id='search-btn' onClick={this.handleSearch}>Search</button>
                    {this.showSearchResults &&
                        <div className='search-results'>
                             <div className='search-result'>
                                 <img src={data[0].Poster} alt='search-pic' />
                            <div className='movie-info'>
                                <span>{data[0].Title}</span>
                                <button onClick={() => this.handleAddToMovies(data[0])}>Add To Movies</button>
                            </div>
                        </div>   
                        </div> 
                    }
                </div>
            </div>
        );
    }
}

export default Navbar;
