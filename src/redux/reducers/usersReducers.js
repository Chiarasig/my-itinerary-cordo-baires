import { createReducer } from "@reduxjs/toolkit";
import usersActions from "../actions/usersActions";

const { enter } = usersActions;

const initialState = {
  name: "",
  lastName: "",
  photo: "",
  logged: false,
  token: "",
};

const usersReducers = createReducer(initialState, (builder) => {
  builder
  .addCase(enter.fulfilled, (state, action) => {
    const { success, response } = action.payload.res;
    if (success) {
      let { user, token } = response;
      localStorage.setItem("token", JSON.stringify({ token: { user: token } }));
      let newState = {
        ...state,
        name: user.name,
        lastName: user.lastName,
        photo: user.photo,
        logged: true,
        role: user.role,
        token: token,
      };
      return newState;
    } else {
      let newState = {
        ...state,
        message: response,
      };
      return newState;
    }
  });
})

export default usersReducers