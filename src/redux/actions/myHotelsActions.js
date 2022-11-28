import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

let getMyHotels = createAsyncThunk("getMyHotels", async (userId) =>{
    let data = await axios.get(`${BASE_URL}/hotel?userId=${userId}`);
    return {
        hotels: data.data.response
    };
})

let deleteMyHotels = createAsyncThunk("deleteMyHotels", async(datos)=>{
    let headers = { headers: { Authorization: `Bearer ${datos.token}` } }
    let data = await axios.delete(`${BASE_URL}/hotel/${datos.idHotel}`, headers);
})

let cargarHoteles = createAsyncThunk("cargarHoteles", async (hotels) => {
    return {
        hotels
    }
})

const myHotelsAction = {
    getMyHotels,
    deleteMyHotels,
    cargarHoteles
}

export default myHotelsAction