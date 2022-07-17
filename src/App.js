import React from 'react';
import { data } from './data.js';
import Navbar from './Navbar.js';
import MovieCard from './MovieCard.js'
import { addMovies } from './action/aindex';


class App extends React.Component{
  componentDidMount () {

    const {store} =  this.props;
    store.subscribe(()=>{
      console.log ('UPDATED');
      this.forceUpdate();
    });
    // to make a
    store.dispatch(addMovies(data));
   
    console.log('STATE',this.props.store.getState());
  }
  render() {
    const { list } = this.props.store.getState();
    console.log('RENDER',this.props.store.getState());
  return (
    <div className='App'>
      <Navbar />
      <div className='main'></div>
      <div className='tabs'>
        <div className='tab'>Movies</div>
        <div className='tab'>Favourite</div>
      </div>

      <div className='list'>
        {list.map((movie,index) =>(
          <MovieCard movie={movie} key={'movies-${index}'}/>
        ))}
      </div>
    </div>
    
  );
}
}

export default App;
