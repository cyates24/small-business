export const addListing = newListing => {
  return {
    type: "ADD_LISTING",
    value: newListing
  };
};

export const deleteListing = index => {
  return {
    type: "DELETE_LISTING",
    value: index
  };
};

export const fetchCoords = (url) => {
  return (dispatch) => {
    fetch(url)
    .then(res => res.json())
    .then(response => {
      const action = {
        type: 'FETCH_COORDS',
         value: response.results[0].geometry.location
      }
      dispatch(action)
    })
  }
}