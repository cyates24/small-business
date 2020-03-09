import { combineReducers } from "redux";


const listings = (state = [], action) => {
  switch (action.type) {
    case "ADD_LISTING":
      return [...state, action.value];
      case 'DELETE_LISTING':
        return state.filter((listing, index) => index !== action.value );
      default:
        return state;
  }};

export default combineReducers({ listings });
