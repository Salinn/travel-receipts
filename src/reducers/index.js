//Redux
import { combineReducers } from 'redux';
//Reducers
import receipts from './ReceiptsReducer';
import table from './TableReducer';
import imageModal from './ImageModalReducer';

const rootReducer = combineReducers({
    receipts,
    table,
    imageModal,
});

export default rootReducer;
