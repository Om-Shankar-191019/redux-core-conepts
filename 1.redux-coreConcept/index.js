import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

// action name constants
// const init = "account/init";
const inc = "account/increment";
const dec = "account/decrement";
const incByAmt = "account/incrementByAmount";
const incBonus = "bonus/increment";
const getAccUserPending = "account/getUser/pending";
const getAccUserFulfilled = "account/getUser/fulfilled";
const getAccUserRejected = "account/getUser/rejected";
//store
const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger.default, thunk.default)
);

let history = [];
//reducer
function accountReducer(state = { amount: 1 }, action) {
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

function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case incBonus:
      return { points: state.points + 1 };
    case incByAmt:
      if (action.payload >= 100) return { points: state.points + 1 };

    default:
      return state;
  }
}
//global state
// console.log(store.getState());

// store.subscribe(() => {
//   history.push(store.getState());
//   console.log(history);
// });

// Async API call

function getUserAccount(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getAccountUserPending());
      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
      dispatch(getAccountUserFulfilled(data.amount));
    } catch (error) {
      dispatch(getAccountUserRejected(error.message));
    }
  };
}

// function getUserAccount(id) {
//   return async (dispatch, getState) => {
//     const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
//     dispatch(initUser(data.amount));
//   };
// }

// async function getUser(dispatch, getState) {
//   const { data } = await axios.get("http://localhost:3000/accounts/1");
//   dispatch(initUser(data.amount));
// }

// Action creators
function getAccountUserPending() {
  return { type: getAccUserPending };
}

function getAccountUserFulfilled(value) {
  return { type: getAccUserFulfilled, payload: value };
}

function getAccountUserRejected(error) {
  return { type: getAccUserRejected, error };
}

// function initUser(value) {
//   return { type: init, payload: value };
// }

function increment() {
  return { type: inc };
}

function decrement() {
  return { type: dec };
}

function incrementByAmount(value) {
  return { type: incByAmt, payload: value };
}

function incrementBonus() {
  return { type: incBonus };
}
// setInterval(() => {
//   store.dispatch(initUser(100));
// }, 1000);

// store.dispatch(getUserAccount(2));
store.dispatch(getUserAccount(2));
// store.dispatch(incrementByAmount(120));
// store.dispatch(incrementBonus());

// console.log("After: ", store.getState());
