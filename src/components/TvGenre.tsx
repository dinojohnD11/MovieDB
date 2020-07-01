import React from 'react';
import '../App.css'

const TvGenre= ()=>{
    return(
        <select className="col-md-2 mr-2 form-control" name="TvGenre" id="TvGenre">
                <option value="" selected>Genre</option>
                <option value="10759">Action and Adventure</option>
                <option value="16">Animation</option>
                <option value="35">Comedy</option>
                <option value="10751">Family</option>
                <option value="10765">Sci-Fi and Fantacy</option>
                <option value="10764">Reality</option>
            </select>
    )
}

export default TvGenre