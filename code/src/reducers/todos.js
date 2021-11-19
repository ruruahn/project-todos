import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

const todos = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (store, action) => {
      console.log(action);

      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
      };

      //Immutability approach
      store.items = [...store.items, newTodo];
    },
    toggleTodo: (store, action) => {
      const updatedItems = store.items.map((item) => {
        if (item.id === action.payload) {
          const updatedTodo = {
            ...item,
            isComplete: !item.isComplete,
          };
          return updatedTodo;
        } else {
          return item;
        }
      });

      store.items = updatedItems;
    },
    deleteTodo: (store, action) => {
      //v1 Mutability Approach
      //   store.items.splice(action.payload, 1);
      //v2 Immutability Approach
      const decreasedItems = store.items.filter(
        (item) => item.id !== action.payload
      );

      store.items = decreasedItems;
    },
  },
});

export default todos;