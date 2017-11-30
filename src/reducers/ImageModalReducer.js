import * as types from '../actions/ActionTypes';
import initialState from '../store/initialState';

const ImageModalReducer = (state = initialState.imageModal, action) => {
    switch(action.type){
      case types.IMAGE_CLICKED:
        return { ...state, imageURL: action.imageURL, isOpen: !state.isOpen };
      default:
        return state;
    }
}

export default ImageModalReducer;
