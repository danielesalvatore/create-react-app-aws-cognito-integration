import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authentication from './authentication';

const reducer = combineReducers({
    form: formReducer,
    authentication
});

export default reducer;