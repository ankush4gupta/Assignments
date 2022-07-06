import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./Auth/reducer";
import { CompanyReducer } from "./Company/reducer";


const rootReducer = combineReducers({
    AuthReducer: AuthReducer,
    CompanyReducer: CompanyReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => {
    console.log(store.getState())
})