import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

let getMyShows = createAsyncThunk("getMyShows", async (userId) =>{
    try {
    let data = await axios.get(`${BASE_URL}/shows?userId=${userId}`);
    console.log('estoy en shows',data);
    return {
        hotels: data.data.response
    };
    } catch (error) {
        console.log(error);
    }
})

let deleteMyShows = createAsyncThunk("deleteMyShows", async(datos)=>{
    let headers = { headers: { Authorization: `Bearer ${datos.token}` } }
    let data = await axios.delete(`${BASE_URL}/shows/${datos.idHotel}`,headers)
})

let cargarShows = createAsyncThunk("cargarShows", async (hotels) => {
    return {
        hotels
    }
})

const myShowsAction = {
    getMyShows,
    deleteMyShows,
    cargarShows
}

export default myShowsAction