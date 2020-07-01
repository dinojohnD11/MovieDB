import React from 'react';
import '../App.css'

const MovieOrTv = () => {
    return (
       <div>
           <div className="form row mt-4"  >
                <button type="button" className=" border bg-dark text-light border-dark col-md-6 p-2">Movies</button>
                <button type="button" className=" border bg-light text-dark border-dark col-md-6 p-2">Tv Series</button>
           </div>

           

        </div>
          
    )
}

export default MovieOrTv;