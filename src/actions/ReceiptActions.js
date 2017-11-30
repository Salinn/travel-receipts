import * as types from './ActionTypes';
import * as API from '../utils/api/API';

export const fetchAllReceipts = () => async dispatch => {
    try {
        let payload = await API.fetchAllRecipts();

        dispatch(fetchReceiptsSuccess({ receipts: payload.data }))
    } catch(error) {
        console.log(error);
    }
}

export const fetchLastMonthsReceipts = () => async dispatch => {
    try {
        let payload = await API.fetchLastMonthsReceipts();

        dispatch(fetchReceiptsSuccess({ receipts: payload.data }))
    } catch(error) {
        console.log(error);
    }
}

export const fetchReceiptsSuccess = ({ receipts }) => {
    return { type: types.FETCHED_RECEIPTS, receipts }
}

export const clickedImage = ({ imageURL }) => {
    return { type: types.IMAGE_CLICKED, imageURL }
};
