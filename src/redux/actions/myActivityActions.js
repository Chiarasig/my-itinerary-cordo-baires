import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

let getMyActivity = createAsyncThunk("getMyActivity", async (userId) =>{
    let data = await axios.get(`${BASE_URL}/itineraries?userId=${userId}`);
    return {
        cities: data.data.response
    };
})
let deleteMyActivity = createAsyncThunk("deleteMyActivity", async(idCity)=>{
    await axios.delete(`${BASE_URL}/itineraries/${idCity}`);
    return { idCity };
})
let cargarActivity = createAsyncThunk("cargarActivity", async (cities) => {
    return {
        cities
    }
})
const myActivityActions = {
    getMyActivity,
    deleteMyActivity,
    cargarActivity
}
export default myActivityActions;