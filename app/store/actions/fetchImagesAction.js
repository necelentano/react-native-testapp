import {
    FETCH_IMAGES_REQUEST,
    FETCH_IMAGES_SUCCESS,
    FETCH_IMAGES_FAILURE
  } from "../constants";
  
  export const fetchingImagesRequest = () => {
    return {
      type: FETCH_IMAGES_REQUEST,
      isFetching: true
    };
  };
  
  export const fetchingImagesSucces = json => {
    return {
      type: FETCH_IMAGES_SUCCESS,
      isFetching: false,
      payload: json
    };
  };
  
  export const fetchingImagesFailure = error => {
    return {
      type: FETCH_IMAGES_FAILURE,
      isFetching: false,
      payload: error
    };
  };
  
  export const fetchImages = () => async dispatch => {
    dispatch(fetchingImagesRequest());
  
    try {
      const response = await fetch(`https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`);
      const json = await response.json();
      dispatch(fetchingImagesSucces(json));
    } catch (error) {
      dispatch(fetchingImagesFailure(error));
    }
  };
  