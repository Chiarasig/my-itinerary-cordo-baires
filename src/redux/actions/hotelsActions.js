import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

let getHotels = createAsyncThunk("getHotels", async () => {
  let data = await axios.get(`${BASE_URL}/hotel`);
  console.log(data.data.response);
  return {
    hotels: data.data.response,
};
});

let getHotelsByName = createAsyncThunk("getHotelsByName", async (name) => {
  let data = await axios.get(`${BASE_URL}/hotel?name=${name}`);
  console.log(data);
  return {
    hotels: data.data.response,
  };
});

let getHotelByFilter = createAsyncThunk("getHotelByFilter", async (filter) => {
  let data = await axios.get(
    `${BASE_URL}/hotel?name=${filter.name}&order=${filter.order}`
  );
  console.log(data);
  return {
    hotels: data.data.response,
  };
});

const hotelsActions = {
  getHotels,
  getHotelsByName,
  getHotelByFilter,
};

export default hotelsActions;
