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
    let params = ''
     if(filter.name){
      params += `name=${filter.name}`
     }
    if (filter.continent) {
      params += `&continent=${filter.continent}`
    }
    let data = await axios.get(
      `${BASE_URL}/cities?${params}`
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
