import { combineReducers } from 'redux';
import getCountry from '../Reducer/PostReducer';
import masterData from '../Reducer/PostReducer';
import getData from '../Reducer/PostReducer';
// import PostReducer from '../Reducer/PostReducer';

const index = combineReducers({
  // PostReducer
  masterData: masterData,
  getCountry: getCountry,
  getData: getData
})
export default index;