import * as types from "../constants/actionTypes";

const saveOperation = (operation) => {
  return {
    type: types.SAVE_OPERATION,
    operation
  };
};

const cleanOperations = () => {
  return {
    type: types.CLEAN_REPORT,
  };
};


export function saveReportOperation(operation) {
  console.log(operation)
  return async dispatch => {
    try {
      dispatch(saveOperation(operation));
    } catch (err) {
      console.log("Error, save report ", err)
    }
  };
}

export function cleanReportOperations() {
  return async dispatch => {
    try {
      dispatch(cleanOperations());
    } catch (err) {
      console.log("Error; clean report ", err)
    }
  };
}
