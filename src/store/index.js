import { createSlice, configureStore } from "@reduxjs/toolkit";

//Redux logic
const redux = require("redux");

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//*********Reducer function required when we are not using Redux toolkit*********
/*
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }

  if (action.type === "toggle") {
    return { counter: state.counter, showCounter: !state.showCounter };
  }

  return state;
};

//Create the store
const store = redux.createStore(counterReducer);*/

const store = configureStore({ reducer: counterSlice.reducer });

export const counterActions = counterSlice.actions;

export default store;
