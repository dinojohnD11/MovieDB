import React from 'react';
import '../App.css'
import TvGenre from './TvGenre'
import MovieGenre from './MovieGenre'



const FilterSortForm = () => {
    return (
        <div className="row border p-3 ">
            
          
            <div className="col-md-1 form-control border-0">Fliters: </div>
         
            <MovieGenre/>
            
            <select className="col-md-2 form-control" name="Language" id="Language">
                <option value="" selected>Language</option> 
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="es">Spanish</option>
                <option value="te">Telugu</option>
                <option value="ta">Tamil</option>
                <option value="ml">Malayalam</option>
            </select>
            

            
            <div className="col-md-1 ml-auto form-control border-0">Sort: </div>
            <select className="col-md-2 form-control" name="SortBy" id="SortBy">
                <option value="popularity" selected>Popularity</option>
                <option value="vote_average">Vote Average</option>
                <option value="release_date">Relese Date</option>
            </select>
            

        </div>
    )
}
export default FilterSortForm;