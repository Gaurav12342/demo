// import React from 'react';
import { ADD_POST, FETCH_POST, FETCH_COUNTRY, FETCH_SPECIFIC_SLUG_MASTER, UPDATE_SLUG } from '../../Redux/Actions/ActionTypes';

const PostReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          // completed: false
        }
      ];
    case FETCH_POST:
      return action.masterData;
    // return { ...state, masterData: action.masterData }
    case FETCH_COUNTRY:
      return action.getCountry;
    case FETCH_SPECIFIC_SLUG_MASTER:
      return action.getData;
    // return { getData:action.payload.getData, ...state }
    case UPDATE_SLUG:
      return [
        ...state,
        {
          id: action.id,
          updateData: action.updateData,
          // completed: false
        }
      ];
    // return action.updateData;
    default:
      return state;
  }
}

export default PostReducer;