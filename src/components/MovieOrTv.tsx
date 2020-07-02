import React, { Component } from 'react';
import '../App.css'
import { PropInterface } from '../types/type';





class MovieOrTv extends Component<PropInterface> {


      handleonclick=(clickedOn:'movie'|'tv')=>{
        if(clickedOn!==this.props.stateInMain.movieOrTv){
            let url=`https://api.themoviedb.org/3/discover/${clickedOn}?api_key=${this.props.stateInMain.apiKey}&language=en-US&sort_by=popularity.desc&page=1`;
             fetch(url)
            .then(data=>data.json())
            .then(data=>this.props.movieortv_Onclick({list: [...data.results], currentPage: 1, totalPages: data.total_pages, movieOrTv: clickedOn,lastUrl:url.replace(`&page1`,'') ,serchValue:'' ,genreValue:'',languageValue:'',sortValue:''}))
            .catch(err=>console.log(err));
    
        }
    }
    componentDidMount(){
        let url=`https://api.themoviedb.org/3/discover/movie?api_key=${this.props.stateInMain.apiKey}&language=en-US&sort_by=popularity.desc&page=1`;
             fetch(url)
            .then(data=>data.json())
            .then(data=>this.props.movieortv_Onclick({list: [...data.results], currentPage: 1, totalPages: data.total_pages, movieOrTv: 'movie',lastUrl:url.replace(`&page1`,'') ,serchValue:'' ,genreValue:'',languageValue:'',sortValue:''}))
            .catch(err=>console.log(err));

    }


    // handleonclick(this.props.movieortv_Onclick,'movie','tv',props.apiKey);
    render(){
    return (
       <div>
           <div className="form row mt-4"  >
                <button type="button" onClick={()=>{console.log('clicked movie');this.handleonclick('movie')}} className={(this.props.stateInMain.movieOrTv==='movie')?this.props.stateInMain.dClass:this.props.stateInMain.lClass}>Movies</button>
                <button type="button" onClick={()=>{console.log('clicked tv');this.handleonclick('tv')}} className={(this.props.stateInMain.movieOrTv==='tv')?this.props.stateInMain.dClass:this.props.stateInMain.lClass}>Tv Series</button>
           </div>

           

        </div>
          
    )}
}

export default MovieOrTv;