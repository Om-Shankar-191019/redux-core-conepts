import {
  getAccUserFulfilled,
  getAccUserPending,
  getAccUserRejected,
  inc,
  dec,
  incByAmt,
} from "../actions";

export function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    // case init:
    //   return { amount: action.payload };
    case getAccUserFulfilled:
      return { amount: action.payload, pending: false };
    case getAccUserPending:
      return { ...state, pending: true };
    case getAccUserRejected:
      return { amount: action.payload, pending: false };
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    case incByAmt:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}
