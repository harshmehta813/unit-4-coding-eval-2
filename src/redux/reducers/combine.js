import { combineReducers } from "redux";
import { productReducer } from "./reducer";

const reducers = combineReducers({
	allProducts: productReducer
});

export default reducers;
