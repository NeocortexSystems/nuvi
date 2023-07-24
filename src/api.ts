import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchChatMessages = async () => {
  try {
    const response = await axios.get(`${API_URL}/chat`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postChatMessage = async (message) => {
  try {
    const response = await axios.post(`${API_URL}/chat`, message);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMapMarkers = async () => {
  try {
    const response = await axios.get(`${API_URL}/map`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postMapMarker = async (marker) => {
  try {
    const response = await axios.post(`${API_URL}/map`, marker);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};