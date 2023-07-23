import axios from "axios";

export const fetchCapsulesFromApi = async () => {
  try {
    const response = await axios.get("https://api.spacexdata.com/v3/capsules");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching capsules data from the API:", error);
  }
};
