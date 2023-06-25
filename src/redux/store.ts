import { createStore, combineReducers} from 'redux';
import AuthReducer from './reducers/authReducer';
 
const rootReducer = combineReducers({
  userStore: AuthReducer,
});
 
export const store = createStore(rootReducer);