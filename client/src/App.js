import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
      {/* <Link to="/movies">Movie List</Link> */}
      <Route exact path='/movies' component={MovieList}/>
      <Route path='/movies/:id'  render={props => <Movie addToSavedList={addToSavedList}{...props} />
      }/>
    </div>
  );
  
};

export default App;
