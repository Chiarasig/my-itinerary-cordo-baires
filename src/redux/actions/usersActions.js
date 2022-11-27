import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const enter = createAsyncThunk('enter', async (datos) => {
    let url = `${BASE_URL}/auth/sign-in`
    try {
        let user = await axios.post(url,datos)
        return {
            success: true,
            response: user.data.response, 
            res: user.data,
        }
    } catch (error) {
        return {
            success: false,
            response: error.response.data.message
        }
    }
})


const usersActions= {
 enter,
}

export default usersActions