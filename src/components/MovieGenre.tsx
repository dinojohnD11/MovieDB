import React from 'react';
import '../App.css'

const MovieGenre= ()=>{
    return(
        <select className="col-md-2 mr-2 form-control" name="MovieGenre" id="MovieGenre">
                <option value="" selected>Genre</option>
                <option value="28">Action</option>
                <option value="12">Adventure</option>
                <option value="16">Animation</option>
                <option value="35">Comedy</option>
                <option value="10751">Family</option>
                <option value="14">Fantasy</option>
                <option value="27">Horror</option>
                <option value="10749">Romance</option>
                <option value="878">Sci-Fi</option>
                <option value="53">Thriller</option>
            </select>
    )
}


export default MovieGenre