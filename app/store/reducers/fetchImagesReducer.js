import {
    FETCH_IMAGES_REQUEST,
    FETCH_IMAGES_SUCCESS,
    FETCH_IMAGES_FAILURE
  } from "../constants";

const initialState = {
    isFetching: false,
    apidata: [],
    errorMassage: ""
  };
  
  export const fetchImagesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_IMAGES_REQUEST: {
        return {
          ...state,
          isFetching: true
        };
      }
      case FETCH_IMAGES_SUCCESS: {
        return {
          ...state,
          isFetching: false,
          apidata: action.payload
        };
      }
      case FETCH_IMAGES_FAILURE: {
        return {
          ...state,
          isFetching: false,
          errorMassage: action.payload
        };
      }
      default: {
        return state;
      }
    }
  };