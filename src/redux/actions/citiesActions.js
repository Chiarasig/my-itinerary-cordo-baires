import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../api/url";

let getCities = createAsyncThunk("getCities", async () => {
    let data = await axios.get(`${BASE_URL}/city`);
    return {
        cities: data.data.response,
    };
    });

let getCitiesByName = createAsyncThunk("getCitiesByName", async (name) => {
    let data = await axios.get(`${BASE_URL}/cities?name=${name}`);
    return {
        cities: data.data.response,
    };
});

let getCitiesByFilter = createAsyncThunk("getCitiesByFilter", async (filter) => {
    let data = await axios.get(
      `${BASE_URL}/cities?name=${filter.name}&continent=${filter.continent}`
    );
    return {
        cities: data.data.response,
    };
  });
  
  const citiesActions = {
    getCities,
    getCitiesByName,
    getCitiesByFilter,
  };

export default citiesActions;
