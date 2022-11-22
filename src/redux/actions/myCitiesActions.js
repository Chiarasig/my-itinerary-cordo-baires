import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

let getMyCities = createAsyncThunk("getMyCities", async (userId) => {
    let data = await axios.get(`${BASE_URL}/cities?userId=${userId}`);
    return {
        cities: data.data.response,
    };
    });

let deleteMyCities = createAsyncThunk("deleteMyCities", async (idCity) => {
    await axios.delete(`${BASE_URL}/city/${idCity}`);
    return { idCity };
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