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

const signOff = createAsyncThunk("signOff", async (token) => {
    let url = `${BASE_URL}/auth/sign-out`;
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try {
        let user = await axios.post(url, null, headers);
        //console.log(user.data)
        return {
        success: true,
        response: user.data.message,
        };
    } catch (error) {
        console.log(error.response);
        return {
        success: false,
        response: error.response.data.message,
        };
    }
});

const reEnter = createAsyncThunk("reEnter", async (token) => {
    let url = `${BASE_URL}/auth/token`;
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try {
      let user = await axios.post(url, null, headers);
      /* console.log(user) */
      return {
        success: true,
        response: user.data.response,
        token: token,
      };
    } catch (error) {
      console.log(error.response);
      return {
        success: false,
        response: error.response.data.message,
      };
    }
  });

  const getUser = createAsyncThunk("getUser", async (id) => {
    let url = `${BASE_URL}/auth/me/${id}`;
    try {
      let res = await axios.get(url);
      console.log(res);
      return {
        success: true,
        response: res.data.response,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        response: "An error occurred",
      };
    }
  });
  
  const updateUser = createAsyncThunk("updateUser", async ({idUser, editUser}) => {
    let url = `${BASE_URL}/auth/me/${idUser}`;
    try{
      let res = await axios.patch(url, editUser);
        return {
        success: true,
        response: res.data.response,
        }
      }catch(error){
        console.log(error)
        return {
          success: false,
          response: "An error occurred",
        }
    }
  })
  

const usersActions= {
 enter,
 signOff,
 reEnter,
 getUser,
 updateUser
}

export default usersActions