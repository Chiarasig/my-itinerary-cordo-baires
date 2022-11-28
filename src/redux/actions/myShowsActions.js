import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

let getMyShows = createAsyncThunk("getMyShows", async (userId) =>{
    let param = '';
    if(userId){
        param = `?userId=${userId}`
    }
    let data = await axios.get(`${BASE_URL}/shows${param}`);
    return {
        hotels: data.data.response
    };
})

let deleteMyShows = createAsyncThunk("deleteMyShows", async(idHotel)=>{
    let data = await axios.delete(`${BASE_URL}/shows/${idHotel}`)
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