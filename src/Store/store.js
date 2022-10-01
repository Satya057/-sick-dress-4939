import {
	legacy_createStore,
	combineReducers,
	applyMiddleware,
	compose,
} from "redux";
import thunk from "redux-thunk";
import authReducer from "../Components/RegisterAndLogin/storeLogin/reducerLogin";
import regReducer from "../Components/RegisterAndLogin/storeRegister/reducerRegister";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const rootReducer = combineReducers({
	
	login: authReducer,
	register: regReducer,
});
export const store = legacy_createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);