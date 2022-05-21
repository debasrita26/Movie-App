import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies} from '../actions';

class App extends React.Component{
  componentDidMount(){
    const {store}=this.props;
    // subscribe will be called after the dispatch action
    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate();
    })
    //make an api call to get the movies
    //we dispatch an action
    store.dispatch(addMovies(data));
    console.log('STATE',this.props.store.getState());
  }

  //check if the movie is in the favourites array or not
  isMovieFavourite=(movie)=>{
    const {favourites}= this.props.store.getState();
    const index=favourites.indexOf(movie);
    if(index !==-1 ){
      //found the movie
      return true;
    }
    return false;

  }
  render(){
    const {list}= this.props.store.getState();
    console.log('RENDER',this.props.store.getState());
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
                {list.map((movie,index) =>(
                    <MovieCard movie={movie} 
                      key={`movies-${index}`} 
                      dispatch={this.props.store.dispatch}
                      isFavourite={this.isMovieFavourite(movie)} />
                ))}
              </div>
          </div>
      </div>
    );
  }
}

export default App;
