import React, { Component } from 'react';
import '../App.css'
import { PropInterface } from '../types/type';

class Search extends Component<PropInterface>{
    handlechange(query:string){
        let url='';

        if(query===""){
            url=`https://api.themoviedb.org/3/discover/${this.props.stateInMain.movieOrTv}?api_key=${this.props.stateInMain.apiKey}&language=en-US${this.props.stateInMain.genreValue}${this.props.stateInMain.languageValue}${this.props.stateInMain.sortValue}&page=1`
                fetch(url)
            .then(data=>data.json())
            .then(data=>this.props.sortfilter_Change({list: [...data.results], currentPage: 1, totalPages: data.total_pages, lastUrl:url.replace(`&page1`,'') ,serchValue:'',genreValue:this.props.stateInMain.genreValue,languageValue:this.props.stateInMain.languageValue,sortValue:this.props.stateInMain.sortValue}))
            .catch(err=>console.log(err));

        }

        else{
         url=`https://api.themoviedb.org/3/search/${this.props.stateInMain.movieOrTv}?api_key=${this.props.stateInMain.apiKey}&language=en-US&query=${query}&page=1`;
        fetch(url)
            .then(data=>data.json())
            .then(data=>this.props.search_Onchange({list: [...data.results], currentPage: 1, totalPages: data.total_pages, lastUrl:url.replace(`&page1`,'') ,serchValue:"",genreValue:"",languageValue:"",sortValue:""}))
            .catch(err=>console.log(err));
    }}

   render(){return (
       <div className="row mt-3 mb-3 ">
           <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>this.handlechange(e.target.value)} className="form-control" type="text" placeholder="Search" aria-label="Search"/>
           {/* <Ttest {...this.props}/> */}
       </div>     
    )}
}

export default Search;


















// import React from 'react';
// import '../App.css'

// const search = (props) => {
//     return (
//        <div className="row mt-3 mb-3 ">
//            <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
//        </div>     
//     )
// }

// export default search;