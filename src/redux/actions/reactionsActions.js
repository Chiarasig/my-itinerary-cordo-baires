import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../api/url";


const getReactions = createAsyncThunk("getReactions", async (id) => {
    let data = await axios.get(`${BASE_URL}/reactions?itineraryId=${id}`);
    return {
        reactions: data.data.response,
    };
});
const updateReactions = createAsyncThunk("updateReactions", async (id) => {
    try {
        let data = await axios.put(`${BASE_URL}/reactions/${id}`);
        return {
            reactions: data.data.response,
        };
    } catch (error) {
        console.log(error);
    }});

const reactionsActions = {
    getReactions,
};


export default reactionsActions;