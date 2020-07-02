import React, { Component } from 'react';
import '../App.css'
import { PropInterface } from '../types/type';



class FilterSortForm extends Component<PropInterface> {
    handlechange(value: string,catogary:'genre'|'language'|'sort')
    {let url='';
   
        switch(catogary){
            case 'genre':
                {url=`https://api.themoviedb.org/3/discover/${this.props.stateInMain.movieOrTv}?api_key=${this.props.stateInMain.apiKey}&language=en-US${value}${this.props.stateInMain.languageValue}${this.props.stateInMain.sortValue}&page=1`
                fetch(url)
            .then(data=>data.json())
            .then(data=>this.props.sortfilter_Change({list: [...data.results], currentPage: 1, totalPages: data.total_pages, lastUrl:url.replace(`&page1`,'') ,serchValue:'',genreValue:value,languageValue:this.props.stateInMain.languageValue,sortValue:this.props.stateInMain.sortValue}))
            .catch(err=>console.log(err));
            break;
            }
            case 'language':
                {url=`https://api.themoviedb.org/3/discover/${this.props.stateInMain.movieOrTv}?api_key=${this.props.stateInMain.apiKey}&language=en-US${this.props.stateInMain.genreValue}${value}${this.props.stateInMain.sortValue}&page=1`
                fetch(url)
            .then(data=>data.json())
            .then(data=>this.props.sortfilter_Change({list: [...data.results], currentPage: 1, totalPages: data.total_pages, lastUrl:url.replace(`&page1`,'') ,serchValue:'' ,genreValue:this.props.stateInMain.genreValue,languageValue:value,sortValue:this.props.stateInMain.sortValue}))
            .catch(err=>console.log(err));
            break;
            }
            case 'sort':
                {url=`https://api.themoviedb.org/3/discover/${this.props.stateInMain.movieOrTv}?api_key=${this.props.stateInMain.apiKey}&language=en-US${this.props.stateInMain.genreValue}${this.props.stateInMain.languageValue}${value}&page=1`
                fetch(url)
            .then(data=>data.json())
            .then(data=>this.props.sortfilter_Change({list: [...data.results], currentPage: 1, totalPages: data.total_pages, lastUrl:url.replace(`&page1`,'') ,serchValue:'' ,genreValue:this.props.stateInMain.genreValue,languageValue:this.props.stateInMain.languageValue,sortValue:value}))
            .catch(err=>console.log(err));
            break;
            }
        }
    }


  render(){
    return (
        <div className="row border p-3 ">
            
          
            <div className="col-md-1 form-control border-0">Fliters: </div>
           
            {(this.props.stateInMain.movieOrTv==='movie')?( <select  defaultValue="" onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>this.handlechange(e.target.value,'genre')} className="col-md-2 mr-2 form-control" name="MovieGenre" id="MovieGenre">
                <option value="" >Genre</option>
                <option value="&with_genres=28">Action</option>
                <option value="&with_genres=12">Adventure</option>
                <option value="&with_genres=16">Animation</option>
                <option value="&with_genres=35">Comedy</option>
                <option value="&with_genres=10751">Family</option>
                <option value="&with_genres=14">Fantasy</option>
                <option value="&with_genres=27">Horror</option>
                <option value="&with_genres=10749">Romance</option>
                <option value="&with_genres=878">Sci-Fi</option>
                <option value="&with_genres=53">Thriller</option>
            </select>):(<select  defaultValue="" onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>this.handlechange(e.target.value,'genre')} className="col-md-2 mr-2 form-control" name="TvGenre" id="TvGenre">
                <option value="" >Genre</option>
                <option value="&with_genres=10759">Action and Adventure</option>
                <option value="&with_genres=16">Animation</option>
                <option value="&with_genres=35">Comedy</option>
                <option value="&with_genres=10751">Family</option>
                <option value="&with_genres=10765">Sci-Fi and Fantacy</option>
                <option value="&with_genres=10764">Reality</option>
            </select>)}
            
            <select defaultValue="" onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>this.handlechange(e.target.value,'language')} className="col-md-2 form-control" name="Language" id="Language">
                <option value="" >Language</option> 
                <option value="&with_original_language=en">English</option>
                <option value="&with_original_language=hi">Hindi</option>
                <option value="&with_original_language=es">Spanish</option>
                <option value="&with_original_language=te">Telugu</option>
                <option value="&with_original_language=ta">Tamil</option>
                <option value="&with_original_language=ml">Malayalam</option>
            </select>
            

            
            <div className="col-md-1 ml-auto form-control border-0">Sort: </div>


            {(this.props.stateInMain.movieOrTv==='movie')?( <select defaultValue="&sort_by=popularity.desc" onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>this.handlechange(e.target.value,'sort')} className="col-md-2 form-control" name="SortBy" id="SortBy">
                <option value="&sort_by=popularity.desc" >Popularity</option>
                <option value="&sort_by=vote_average.desc">Rating</option>
                <option value="&sort_by=release_date.desc">Relese Date</option>
            </select>):(<select defaultValue="&sort_by=popularity.desc" onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>this.handlechange(e.target.value,'sort')} className="col-md-2 form-control" name="SortBy" id="SortBy">
                <option value="&sort_by=popularity.desc" >Popularity</option>
                <option value="&sort_by=vote_average.desc">Rating</option>
                <option value="&sort_by=first_air_date.desc">First Air Date</option>
            </select>)}
            

        </div>
    )}
}
export default FilterSortForm;