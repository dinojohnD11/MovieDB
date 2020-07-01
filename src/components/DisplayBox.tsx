import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import {StoreType, EntityType} from '../types/index';


const DisplayBox=(list:EntityType[],movieOrTv:"tv" | "movie")=>{
    return(
          
        <div className="row">
            <div className="col-md-12">    
                {
                list.map((entity, i) => { 
                    return (
                    <div className="card"> 
                        <div className="card-image waves-effect waves-block waves-light">
                            { entity.poster_path == null ? <img className="" src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="Card image cap" style={{ width: "100%",
                                height: 360}}/> : <img className="" src={`http://image.tmdb.org/t/p/w185${entity.poster_path}`} alt="Card image cap" style={{ width: "100%",
                                height: 360}} />}
                        </div>
                        <div className="card-content">                    
                            <p>{entity.title?entity.title : entity.name}</p>
                        </div>   
                    </div>
                    )
                })
                }         
            </div>
        </div>
    
    )

}

const mapStateToProps = (state:StoreType) => {
    return {
        list: state.list,
        movieOrTv: state.movieOrTv
    }
}

export default connect(mapStateToProps)(DisplayBox);