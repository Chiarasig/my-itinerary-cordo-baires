import { createReducer } from "@reduxjs/toolkit";
import commentsAction from "../actions/commentsAction";

const initialState={
    comments:[]
}

const commentsReducers = createReducer (initialState, (builder) =>{
    builder
     .addCase(commentsAction.getComments.fulfilled, (state, action) => {
        return {...state, comments: action.payload.comments};
     })
     .addCase(commentsAction.createComments.fulfilled, (state, action) => {
        return {...state, comments: action.payload.comments};
     })
     .addCase(commentsAction.editComments.fulfilled, (state,action) => {
      return {...state, comments: action.payload.comments};
     })
     .addCase(commentsAction.deleteComments.fulfilled, (state,action) => {
      return {...state, comments: action.payload.comments};
     })
})

export default commentsReducers

