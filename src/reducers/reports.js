import {
  SAVE_OPERATION,
  CLEAN_REPORT,
} from '../constants/actionTypes';
import initialState from './initialState';

export default function reportsReducer(state = initialState().reports, action) {
  let list;
  switch (action.type) {
    case SAVE_OPERATION:    
      return {
        ...state,
        list: state.list.concat(action.operation).reverse(),
      };
    case CLEAN_REPORT:
      list = []
      return {
        list,
      };

    default:
      return state;
  }
}
