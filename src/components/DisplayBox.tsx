import React, { Component } from 'react';
import '../App.css';
import {   PropInterface, EntityType, StoreType } from '../types/type';



class DisplayBox extends Component<PropInterface>{




    componentDidMount() {

        window.addEventListener('scroll',()=>{if(((window.scrollY+window.innerHeight)==document.documentElement.scrollHeight)&&((this.props.stateInMain.currentPage++)<(this.props.stateInMain.totalPages)))
            {
                let url=`${this.props.stateInMain.lastUrl}&page=${this.props.stateInMain.currentPage}`;
                setTimeout(() => {fetch(url)
                    .then(data=>data.json())
                    .then(data=>this.props.scroll({list: this.props.stateInMain.list.concat([...data.results]), currentPage: this.props.stateInMain.currentPage+1,lastUrl:url.replace(`&page${this.props.stateInMain.currentPage}`,'')}))
                    .catch(err=>console.log(err));
                    
                }, 100);
                
            }} );
    }
    
    // componentWillUnmount() {
    //     window.removeEventListener('scroll', ()=>{if(((window.scrollY+window.innerHeight)==document.documentElement.scrollHeight)&&((this.props.stateInMain.currentPage++)<(this.props.stateInMain.totalPages)))
    //         {
    //             let url=`${this.props.stateInMain.lastUrl}&page=${this.props.stateInMain.currentPage}`;
    //             setTimeout(() => {fetch(url)
    //                 .then(data=>data.json())
    //                 .then(data=>this.props.scroll({list: this.props.stateInMain.list.concat([...data.results]), currentPage: this.props.stateInMain.currentPage+1,lastUrl:url.replace(`&page${this.props.stateInMain.currentPage}`,'')}))
    //                 .catch(err=>console.log(err));
                    
    //             }, 100);
                
    //         }} );
    // }



  render(){
    return(       
        <div className="row border" >    
           
            {this.props.stateInMain.list.map((entity) => { 
                return (
                <div className=" col-md-3 p-3" key={entity.id}> 
                    <div className="" style={{height: 'auto'}}>
                        <div className="card-image">
                            { entity.poster_path == null ? <img className="rounded border img-fluid" src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="Not available" style={{ width: "100%",
                                height: 'auto'}}/> : <img className="rounded border img-fluid" src={`http://image.tmdb.org/t/p/w185${entity.poster_path}`} alt="Not available" style={{ width: "100%",
                                height: 'auto'}} />}
                        </div>
                        <div className="card-content font-weight-bold p-2">                    
                            <p>{entity.title?entity.title : entity.name}</p>
                        </div>   
                    </div>
                </div>
                )
            })
            }         
        </div>    
    )
}}
export default DisplayBox