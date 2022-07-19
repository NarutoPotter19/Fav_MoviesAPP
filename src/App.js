import React from 'react';
import { data } from './data.js';
import Navbar from './Navbar.js';
import MovieCard from './MovieCard.js'
import { addMovies, setShowFavourites } from './action/aindex';


class App extends React.Component{
  componentDidMount () {

    const {store} =  this.props;
    store.subscribe(()=>{
      console.log ('UPDATED');
      this.forceUpdate();
    });
    // to make api call
    //dispatch action
    store.dispatch(addMovies(data));
   
    console.log('STATE',this.props.store.getState());
  }

   isMovieFavourite= (movie) => {
    const { favourites} = this.props.store.getState();
    const index = favourites.indexOf(movie);
    if( index !== -1) {
      // found the movie
      return true;

    }
    return false;
   }

   onChangeTab=(val) => {
    this.props.store.dispatch(setShowFavourites(val))
   }
  render() {
    const { list , favourites , showFavourites} = this.props.store.getState();
    console.log('RENDER',this.props.store.getState());
    const displayMovies = showFavourites?favourites:list;
  return (
    <div className="App">
      <Navbar />
      <div className="main">
      <div className="tabs">
        <div className={`tab ${showFavourites ? '' : 'active-tabs'}`}
        onClick={()=>this.onChangeTab(false)}
        >Movies</div>
        <div className={`tab ${showFavourites ? '' : 'active-tabs'}`}
        onClick={()=>this.onChangeTab(true)}
        >Favourite</div>
      </div>

      <div className="list">
        {displayMovies.map((movie,index) =>(
          <MovieCard movie={movie}
           key={'movies-${index}'}
            dispatch={this.props.store.dispatch}
            isFavourite={this.isMovieFavourite(movie)}
            />
        ))}
      </div>
      {
        displayMovies.length ===0 ?
         <div className='no-movies'> No Movies to diplay

        </div>
        : null
      }
    </div>
    </div>
    
  );
}
}

export default App;
