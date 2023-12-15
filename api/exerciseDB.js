import axios from "axios";

const baseURL = "https://exercisedb.p.rapidapi.com";

const useFetch = async (url) => {
  try {
    const options = {
      method: "GET",
      url: baseURL + url,
      params: { limit: "10" },
      headers: {
        "X-RapidAPI-Key": "bbb88ce809msh2a0091f3949e152p1ed72bjsncc9870fa403b",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchBodyPartExercises = async (bodyPart) => {
  try {
    const data = await useFetch(`/exercises/bodyPart/${bodyPart}`);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
