//Initial Data
import initialState from '../store/initialState';

const TableReducer = (state = initialState.table, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default TableReducer;
