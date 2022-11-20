import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from '../../api/url'

const getHotels = createAsyncThunk("getHotels", async () => {
    try {
        const res = await axios.get(`${BASE_URL}/hotel`);
        return res.data.response
    } catch (error) {
        console.log(error);
        return {
            payload: "error"
        };
    }
});

const getHotelsFilter = createAsyncThunk("getHotelsFilter", async ({name}) =>{
    let url = `${BASE_URL}/hotel?name=${name}`;
    try {
        const res = await axios.get(url);
        console.log(res.data.response);
        return {
            hotels: res.data.response,
        };
    } catch (error) {
        console.log(error);
        return {
            payload: "error"
        };
    }
});

const getHotelsSelect = createAsyncThunk(
    "getHotelsSelect",
    async (order) => {
      /* let url = `${BASE_URL}/hotel?name=${order.text}&order=${order.order}` */
      try {
        const res = await axios.get(`${BASE_URL}/hotel?name=${order.text}&order=${order.order}`);
        console.log(res.data.response);
        return {
          hotels: res.data.response,
        };
      } catch (error) {
        console.log(error.message);
        return {
          payload: "error",
        };
      }
    }
  );

const hotelsActions = {
    getHotels,
    getHotelsFilter,
    getHotelsSelect
};

export default hotelsActions