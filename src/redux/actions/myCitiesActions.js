import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

let getMyCities = createAsyncThunk("getMyCities", async (userId) => {
    let data = await axios.get(`${BASE_URL}/cities?userId=${userId}`);
    return {
        cities: data.data.response,
    };
    });

let deleteMyCities = createAsyncThunk("deleteMyCities", async (data) => {
    let headers = { headers: { Authorization: `Bearer ${data.token}` } }
    await axios.delete(`${BASE_URL}/city/${data.idCity}`, headers);
    let date= data.idCity
    return { date };
});
let cargarMyCities = createAsyncThunk("cargarMyCities", async (cities) => {
    return{
        cities
    }
});

const myCitiesActions = {
    getMyCities,
    deleteMyCities,
    cargarMyCities
};
export default myCitiesActions;