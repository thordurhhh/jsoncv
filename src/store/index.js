import { createContext } from "react";
import initState from './initState.json'
import randomColor from '../utils/getRandomColor'

export const initialState = { 
  ...initState,
  color: randomColor()
 };

export const reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "update":
      return action.payload
    default:
      return state;
  }
};

export const Context = createContext();
