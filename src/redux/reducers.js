import { combineReducers } from "redux";

const user = (state = null, action) => state;

const listings = (state = [], action) => {
  switch (action.type) {
    case "ADD_LISTING":
      return [...state, action.value];
      case "DELETE_LISTING":
        let newState = [...state];
        let result = newState.filter(listing => listing.name !== action.value);
        return result;
      default:
        return state;
    }
  };

export default combineReducers({ user, listings });
