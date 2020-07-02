import Main from './Main'
import {connect} from 'react-redux'
import { StoreType } from '../types/type'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/action'

function mapStateToProps( state :StoreType)
{
    return{stateInMain: state}
}

function mapDispachToProps(dispatch:any) {
  return bindActionCreators(actionCreators, dispatch);
 }

const App= connect(mapStateToProps,mapDispachToProps)(Main)

export default App