import { ADD_CAR } from "../constants/actionTypes";

const carReducer = (state = [], action) => {
  console.log(state);
  switch (action.type) {
    case ADD_CAR:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default carReducer;
