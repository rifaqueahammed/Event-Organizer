import { combineReducers } from "redux";
import ServiceProvider from './ServiceProvider';
import User from './User';


const reducers = combineReducers({
    ServiceProviderData:ServiceProvider,
    UserData:User
    
});

export default reducers;