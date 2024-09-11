import axios from "axios";

// Ensure this is correctly set in your environment
const API_KEY = import.meta.env.VITE_API_YOUTUBE_KEY; 
const BASE_URL = "https://youtube138.p.rapidapi.com";

// Request options including headers
const options = {
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  }
};

// Function to fetch data from the API
export const fetchData = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    console.log('API Response:', response.data); // Log response data
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error('Error Response Data:', error.response.data);
      console.error('Error Response Status:', error.response.status);
      console.error('Error Response Headers:', error.response.headers);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Error Request Data:', error.request);
    } else {
      // Something happened in setting up the request
      console.error('Error Message:', error.message);
    }
    // Re-throw the error to allow further handling if needed
    throw error;
  }
};
