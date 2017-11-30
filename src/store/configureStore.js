//Redux
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from './initialState';

export default function configureStore() {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk),
        ),
    );
}
