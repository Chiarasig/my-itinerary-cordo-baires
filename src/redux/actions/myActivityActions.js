import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";


let getMyActivity = createAsyncThunk("getMyActivity", async (userId) =>{
    try {

    let data = await axios.get(`${BASE_URL}/itineraries?userId=${userId}`);
    return {
        cities: data.data.response
    };
    } catch (error) {
        console.log(error);
    }
})
let deleteMyActivity = createAsyncThunk("deleteMyActivity", async(data)=>{
    let headers = { headers: { Authorization: `Bearer ${data.token}` } }
    await axios.delete(`${BASE_URL}/itineraries/${data.idActivity}`,headers);
    let date= data.idActivity
    return { date };
})
let cargarActivity = createAsyncThunk("cargarActivity", async (cities) => {
    return {
        cities
    }
})
let getActivity = createAsyncThunk("getActivity", async () => {
    let data = await axios.get(`${BASE_URL}/itineraries/`);
    return {
        activity: data.data.response
    };
})

const myActivityActions = {
    getMyActivity,
    deleteMyActivity,
    cargarActivity,
    getActivity
}
export default myActivityActions;