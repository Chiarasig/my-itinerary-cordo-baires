import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getReactions = createAsyncThunk("getReactions", async (datos) => {
  let headers = { headers: { Authorization: `Bearer ${datos.token}` } };
  let data = await axios.get(
    `${BASE_URL}/reactions?itineraryId=${datos.idItinerary}`,
    headers
  );
  return {
    reactions: data.data.reactions,
  };
});
const updateReactions = createAsyncThunk("updateReactions", async (datos) => {
  let headers = { headers: { Authorization: `Bearer ${datos.token}` } };
  try {
    let data = await axios.put(
      `${BASE_URL}/reactions?name=${datos.name}&itineraryId=${datos.idItinerary}`,
      datos,
      headers
    );
    return {
      reactions: data.data.response,
    };
  } catch (error) {
    console.log(error);
  }
});
const deleteReactions = createAsyncThunk("deleteReactions", async (datos) => {
    let headers = { headers: { Authorization: `Bearer ${datos.token}` } };
  try {
    let data = await axios.put(`${BASE_URL}/reactions/${datos.id}`, datos, headers);
    return {
      reactions: data.data.response,
    };
  } catch (error) {
    console.log(error);
  }
});
const reactionsforuser = createAsyncThunk("reactionsforuser", async (datos) => {
  let headers = { headers: { Authorization: `Bearer ${datos.token}` } };
  let params = `?`;
  if(datos.idItinerary){
    params += `itineraryId=${datos.idItinerary}&`
  }
  if(datos.idUser){
    params += `userId=${datos.idUser}&`
  }
  let data = await axios.get(
    `${BASE_URL}/reactions/reactionsforuser/${params}`,
    headers
  );
  return {
    reactionsforuser: data.data.data,
  };
});

let cargarReaction = createAsyncThunk("cargarReaction", async (reactionsforuser) => {
  console.log(reactionsforuser);
  return {
    reactionsforuser,
  };
});

const reactionsActions = {
  getReactions,
  updateReactions,
  deleteReactions,
  reactionsforuser,
  cargarReaction,
};

export default reactionsActions;
