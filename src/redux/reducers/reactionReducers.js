import {createReducer} from '@reduxjs/toolkit';
import reactionsActions from "../actions/reactionsActions";

const initialState = {
  reactions: [],
  loading: false,
  error: false,
};
const reactionReducers = createReducer(initialState, (builder) => {
  builder.addCase(reactionsActions.getReactions.fulfilled, (state, action) => {
    return {
      ...state,
      reactions: action.payload.reactions,
      loading: false,
      error: false,
    };
  });
});

export default reactionReducers;
