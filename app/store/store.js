import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { fetchImagesReducer } from "./reducers/fetchImagesReducer";

const middleWare = applyMiddleware(thunk, logger);

const rootReducer = combineReducers({
    fetchImagesData: fetchImagesReducer,
  });

export const store = createStore(rootReducer, middleWare)