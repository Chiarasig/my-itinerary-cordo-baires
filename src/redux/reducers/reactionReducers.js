import {createReducer} from '@reduxjs/toolkit';
import reactionsActions from "../actions/reactionsActions";

const initialState = {
  reactions: [],
  reactionsforuser: [],
  loading: false,
  error: false,
};
const reactionReducers = createReducer(initialState, (builder) => {
  builder.addCase(reactionsActions.getReactions.fulfilled, (state, action) => {
    return {
      ...state,
      reactions: action.payload.reactions ? action.payload.reactions : state.reactions,
      reactionsforuser: action.payload.reactionsforuser ? action.payload.reactionsforuser : state.reactionsforuser,
      loading: false,
      error: false,
    };
  })
  .addCase(reactionsActions.updateReactions.fulfilled, (state, action) => {
    return {
      ...state,
      reactions: action.payload.reactions ? action.payload.reactions : state.reactions,
      reactionsforuser: action.payload.reactionsforuser ? action.payload.reactionsforuser : state.reactionsforuser,
      loading: false,
      error: false,
    };
  })
  .addCase(reactionsActions.deleteReactions.fulfilled, (state, action) => {
    return {
      ...state,
      reactions: action.payload.reactions ? action.payload.reactions : state.reactions,
      reactionsforuser: action.payload.reactionsforuser ? action.payload.reactionsforuser : state.reactionsforuser,
      loading: false,
      error: false,
    };
  })
  .addCase(reactionsActions.reactionsforuser.fulfilled, (state, action) => {
    return {
      ...state,
      reactions: action.payload.reactions ? action.payload.reactions : state.reactions,
      reactionsforuser: action.payload.reactionsforuser ? action.payload.reactionsforuser : state.reactionsforuser,
      loading: false,
      error: false,
    };
  })
  .addCase(reactionsActions.cargarReaction.fulfilled, (state, action) => {
    return {
      ...state,
      reactions: action.payload.reactions ? action.payload.reactions : state.reactions,
      reactionsforuser: action.payload.reactionsforuser ? action.payload.reactionsforuser : state.reactionsforuser,
      loading: false,
      error: false,
    };
  })
});

export default reactionReducers;
