import Main from './Main'
import {connect} from 'react-redux'
import { StoreType } from '../types/type'
function mapStateToProps( state :StoreType)
{
    return{stateInMain: state}
}
const App= connect(mapStateToProps)(Main)

export default App