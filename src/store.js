// store.js
import { createStore, combineReducers } from 'redux';

// Define your initial state
const initialState = {
  itm: null, // Example property in your state
  // other properties...
};

// Create your reducer function
const yourReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ITM':
      // Update the itm property in your state
      return { ...state, itm: action.payload };
    // Handle other actions as needed...
    default:
      return state;
  }
};

// Combine multiple reducers if necessary
const rootReducer = combineReducers({
  yourReducer,
  // other reducers...
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;
