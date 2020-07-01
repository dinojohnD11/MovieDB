import React, { Component } from 'react';
import '../App.css';
import Search from './Search'
import MovieOrtv from './MovieOrTv'
import FilterSortForm from './FilterSortForm'
import DisplayBox from './DisplayBox'


class Main extends Component{
    // constructor(){
    //     // super()
    // }
    render(){
        console.log('hello');
        return(
            <div className="container">
            <Search />
            <MovieOrtv/>
            <FilterSortForm/>
            <DisplayBox />
        </div>
        )
    }
}



export default Main;