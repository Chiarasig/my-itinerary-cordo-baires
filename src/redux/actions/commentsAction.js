import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

let getComments = createAsyncThunk("getComments", async (showId) => {
  try {
    let data = await axios.get(`${BASE_URL}/comments?showId=${showId}`);
    
    return {
      comments: data.data.response,
    };
  } catch (error) {
    console.log(error);
  }
});

let createComments = createAsyncThunk("createComments", async (datos) => {
  let headers = { headers: { Authorization: `Bearer ${datos.token}` } };
  const {userId, comment, showId, date} = datos
  let info ={
    userId: userId, 
    comment: comment, 
    showId: showId, 
    date: date
  }
  try {
    const res = await axios.post(`${BASE_URL}/comments`, info, headers);
    console.log(res.data.listComment);
    return {
      success: true,
      comments: res.data.listComment
      
    };
  } catch (error) {

    return {
      success: false,
      response: error.response.data.message,
    };
  }
});

let editComments = createAsyncThunk('editComments', async (datos) => {
  let headers = { headers: { Authorization: `Bearer ${datos.token}` } };
  const {comment, id} = datos
  let info = {
    comment: comment
  }
  try {
    const res = await axios.put(`${BASE_URL}/comments/${id}`, info, headers);
    console.log(res);
    return{
      success: true,
      comment: res.data.listComment
    }
  } catch (error) {
    return {
      success: false,
      response: error.response.data.message,
    };
  }
})

let deleteComments = createAsyncThunk('deleteComments', async (datos) =>{
  let headers = { headers: { Authorization: `Bearer ${datos.token}` } };
  const {id}=datos
  try {
    const res = await axios.delete(`${BASE_URL}/comments/${id}`, headers);
    console.log(res);
    return{
      success: true,
      comment: res.data.listComment
    }
  } catch (error) {
    return {
      success: false,
      response: error.response.data.message,
    };
  }
})


const commentsAction = {
    getComments,
    createComments,
    editComments,
    deleteComments
}

export default commentsAction