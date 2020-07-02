import React from 'react';
import '../App.css';
import Search from './Search'
import MovieOrTv from './MovieOrTv'
import FilterSortForm from './FilterSortForm'
import DisplayBox from './DisplayBox'
import { PropInterface } from '../types/type';


const Main =(props :PropInterface)=>{
        return(
            
            <div className="container ">
                <Search {...props}/>
                <MovieOrTv {...props}/>
                <FilterSortForm {...props}/>
                <DisplayBox {...props}/>
            </div>
        )
    
}



export default Main;