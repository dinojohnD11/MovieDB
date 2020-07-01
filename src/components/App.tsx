import React, { JSXElementConstructor } from 'react';
import '../App.css';
import Search from './Search'
import MovieOrtv from './MovieOrTv'
import FilterSortForm from './FilterSortForm'
import DisplayBox from './DisplayBox'

function App(){
  return (
    <div className="container">
      <Search/>
      <MovieOrtv/>
      <FilterSortForm/>
      <DisplayBox/>
    </div>
   
  );
}

export default App;
