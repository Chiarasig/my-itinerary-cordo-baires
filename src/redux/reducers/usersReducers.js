import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import usersActions from "../actions/usersActions";

const { enter, signOff, reEnter } = usersActions;

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
  })
  .addCase(signOff.fulfilled, (state, action) => {
    const { success, response } = action.payload;
    if (success) {
      localStorage.removeItem("token");
      let newState = {
        ...state,
        name: "",
        lastName: "",
        photo: "",
        logged: false,
        role: "",
        idUser: "",
        token: "",
      };
      console.log(newState);
      return newState;
    } else {
      let newState = {
        ...state,
        message: response,
      };
      return newState;
    }
  })
  .addCase(reEnter.fulfilled, (state, action) => {
    const { success, response, token } = action.payload;
    if (success) {
      let { user } = response;

      let newState = {
        ...state,
        name: user.name,
        lastName: user.lastName,
        photo: user.photo,
        logged: true,
        role: user.role,
        idUser: user.id,
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