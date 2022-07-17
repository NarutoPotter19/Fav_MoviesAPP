import React from 'react';
import { data } from './data.js';
import Navbar from './Navbar.js';
import MovieCard from './MovieCard.js'


class App extends React.Component{
  componentDidMount () {

    const {store} =  this.props;
    store.subscribe(()=>{
      console.log ('UPDATED');
      this.forceUpdate();
    });
    // to make a
    store.dispatch({
      type: 'ADD_MOVIES',
      movies : data
    });
   
    console.log('STATE',this.props.store.getState());
  }
  render() {
    const movies = this.props.store.getState();
    console.log('RENDER');
  return (
    <div className='App'>
      <Navbar />
      <div className='main'></div>
      <div className='tabs'>
        <div className='tab'>Movies</div>
        <div className='tab'>Favourite</div>
      </div>

      <div className='list'>
        {data.map((movie,index) =>(
          <MovieCard movie={movie} key={'movies-${index}'}/>
        ))}
      </div>
    </div>
    
  );
}
}

export default App;
