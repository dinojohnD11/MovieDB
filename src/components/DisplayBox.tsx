import React from 'react';
import '../App.css';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {StoreType, EntityType} from '../types/type';
import Ttest from './Ttest'


const DisplayBox=(props)=>{
    console.log(props.list);
    return(  
            
            <div className="row border">    
                {/* <Ttest value={props.list[0].id}/> */}
                {props.list.map((entity, i) => { 
                    return (
                    <div className=" col-md-3 p-3"> 
                        <div className="" style={{height: 'auto'}}>
                            <div className="card-image">
                                { entity.poster_path == null ? <img className="rounded border img-fluid" src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="Card image cap" style={{ width: "100%",
                                    height: 'auto'}}/> : <img className="rounded border img-fluid" src={`http://image.tmdb.org/t/p/w185${entity.poster_path}`} alt="Card imaage cap" style={{ width: "100%",
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

}


function mapStateToProps( state :StoreType)
{
    return{list: state.list}
}

export default connect(mapStateToProps)(DisplayBox)