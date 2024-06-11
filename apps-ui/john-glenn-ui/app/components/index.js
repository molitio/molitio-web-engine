import {cookieReducer} from './cookie';
import {actionsReducer} from './actions'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    cookie: cookieReducer,
    actions: actionsReducer 
})

export { default as CookieConsentPopup } from './consent/CookieConsentPopup';
export default allReducers;
