// import { createStore } from "redux";
// import { combineReducers } from "redux";
// import todos from "../moduels/todos";

import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../slices/todosSlice";

// const rootReducer = combineReducers({
//     todos,
// });

// const store = createStore(rootReducer);

const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});

export default store;
