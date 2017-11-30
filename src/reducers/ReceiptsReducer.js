//Actions
import * as types from '../actions/ActionTypes';
//Initial Data
import initialState from '../store/initialState';

const ReceiptsReducer = (state = initialState.receipts, action) => {
    switch (action.type) {
        case types.FETCHED_RECEIPTS:
            return action.receipts;
        default:
            return state;
    }
}

export default ReceiptsReducer;
