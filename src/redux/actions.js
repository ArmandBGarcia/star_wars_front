import axios from "axios";
export const GET_CHARACTERS = "GET_CHARACTERS";

const url = "http://34.68.80.111:8000/characters";

export const getCharacters = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(url);
      return dispatch({
        type: GET_CHARACTERS,
        payload: response.data,
      });
    } catch (error) {
      return alert("the data could not be processed");
    }
  };
};
